import { fetchUser } from '@/app/services/forClient/fetchUser';
import { fetchPosts } from '@/app/services/forClient/fetchPost';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { BiDotsHorizontalRounded, BiSolidLike } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment, FaShare } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams

const FeedById = () => {
  const [loggedInUser, setLoggedInUser] = useState<any>(() => {
    try {
      const data = localStorage.getItem('userLoggedIn');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  });

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

  // Get the query parameter from the URL
  const searchParams = useSearchParams();
  const userIdFromQuery = searchParams.get('id'); // Get 'id' from URL

  // Fetch users and posts on component mount
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchPosts());
  }, [dispatch]);

  // Helper function to find a user by their ID
  const findUserById = (userId: string) => {
    return state.client.userList?.find((user: any) => user.id === userId);
  };

  // Retrieve posts from state
  const posts = state.client.posts || [];

  // Calculate the time since the post was created
  const timeSince = (date: string) => {
    const postDate = new Date(date);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return `${Math.floor(interval)} years ago`;

    interval = seconds / 2592000;
    if (interval > 1) return `${Math.floor(interval)} months ago`;

    interval = seconds / 86400;
    if (interval > 1) return `${Math.floor(interval)} days ago`;

    interval = seconds / 3600;
    if (interval > 1) return `${Math.floor(interval)} hours ago`;

    interval = seconds / 60;
    if (interval > 1) return `${Math.floor(interval)} minutes ago`;

    return `${Math.floor(seconds)} seconds ago`;
  };

  // Function to determine the media grid layout based on number of media items
  const getImageGridStyle = (mediaCount: number) => {
    if (mediaCount === 1) return 'w-full';
    if (mediaCount === 2) return 'grid grid-cols-2 gap-2';
    if (mediaCount === 3) return 'grid grid-cols-3 gap-2';
    if (mediaCount === 4) return 'grid grid-cols-4 gap-2';
    return 'grid grid-cols-3 gap-2';
  };

  // Filter posts by `userIdFromQuery`, or fallback to logged-in user's posts if no `id` is provided
  const filteredPosts = posts.filter((post: any) => {
    if (userIdFromQuery) {
      // Show posts of the user with the id from URL
      return post.user_id === userIdFromQuery;
    } else {
      // Fallback to logged-in user's posts
      return post.user_id === loggedInUser?.id;
    }
  });

  return (
    <div>
      {filteredPosts.map((post: any, index: number) => {
        const currentUser = findUserById(post.user_id);

        // Skip rendering if user or post content is missing
        if (!currentUser || !post.content) return null;

        return (
          <div key={index} className="mt-4 bg-white rounded-lg max-w-[600px] mx-auto">
            {/* Post Header */}
            <div className="flex justify-between px-4 pt-4">
              <div className="flex">
                {currentUser.avatar && (
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={currentUser.avatar}
                    alt={`${currentUser.name}'s avatar`}
                  />
                )}
                <div className="ml-4">
                  <b>{currentUser.name}</b>
                  <p>{timeSince(post.date)}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
                <MdClose className="w-[30px] h-[30px]" />
              </div>
            </div>

            {/* Post Content */}
            <div className="mt-4 px-4">
              <p>{post.content.text}</p>
            </div>

            {/* Post Media Grid */}
            <div className={`mt-4 px-4 ${getImageGridStyle(post.content.media?.length || 0)}`}>
              {post.content.media?.slice(0, 6).map((media: any, idx: number) => (
                <div key={idx} className="relative overflow-hidden">
                  {/* Render images */}
                  {media.type === 'image' && (
                    <Image
                      src={media.url}
                      alt="Preview"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  )}
                  {/* Render videos */}
                  {media.type === 'video' && (
                    <div className="video-container">
                      <video controls>
                        <source src={media.url} type="video/mp4" />
                      </video>
                      <div className="play-button">▶</div>
                    </div>
                  )}
                  {/* Render links */}
                  {media.type === 'link' && (
                    <Link href={media.url} className="w-full h-full object-cover">
                      {media.url}
                    </Link>
                  )}

                  {/* Show "+n more" overlay if there are more than 6 media items */}
                  {idx === 5 && post.content.media.length > 6 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-xl">
                      +{post.content.media.length - 6} more
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Engagement Section */}
            <div>
              <div className="flex justify-between py-3 px-5">
                <div className="flex items-center gap-2">
                  <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />
                  <span>
                    {post.engagement?.reactions?.like || 0} likes • {post.engagement?.shares || 0} shares
                  </span>
                </div>
                <div>0 comments</div>
              </div>
              <div className="w-[100%] flex justify-center items-center">
                <hr className="w-[90%]" />
              </div>

              {/* Post Interaction Buttons */}
              <div className="flex p-3 items-center justify-center h-16">
                <button
                  className="w-[32%] border-0 rounded-lg h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"
                  aria-label="Like post"
                >
                  <AiOutlineLike /> Like
                </button>
                <button
                  className="w-[32%] border-0 rounded-lg h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"
                  aria-label="Comment on post"
                >
                  <FaRegComment /> Comment
                </button>
                <button
                  className="w-[32%] border-0 rounded-lg h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"
                  aria-label="Share post"
                >
                  <FaShare /> Share
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedById;