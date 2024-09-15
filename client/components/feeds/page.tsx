"use client";
import { fetchPosts } from "@/app/services/forClient/fetchPost";
import { fetchUser } from "@/app/services/forClient/fetchUser";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiSolidLike } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs"; // Make sure to install this library

export default function Feed() {
  const dispatch: any = useDispatch();
  const state: any = useSelector((state) => state);
  const [user, setUser] = useState<any>(() => {
    let data = JSON.parse(localStorage.getItem("userLoggedIn") || "{}");
    return data;
  });

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUser());
  }, [dispatch]);

  const findUserById = (userId: string) => {
    return state.client.userList?.find((user: any) => user.id === userId);
  };

  // Function to shuffle array
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle posts array
  const shuffledPosts = state.client.posts ? shuffleArray([...state.client.posts]) : [];

  // Function to determine image grid size based on the number of images
  const getImageGridStyle = (mediaCount: number) => {
    if (mediaCount === 1) return "w-full";
    if (mediaCount === 2) return "grid grid-cols-2 gap-2";
    if (mediaCount === 3) return "grid grid-cols-3 gap-2";
    if (mediaCount === 4) return "grid grid-cols-4 gap-2";
    return "grid grid-cols-3 gap-2";
  };

  // Use dayjs to format the time since the post was made
  const timeSince = (date: string) => {
    if (!date || isNaN(Date.parse(date))) return "Unknown time";
    const postDate = dayjs(date); // Convert date using dayjs
    const now = dayjs();
    const seconds = now.diff(postDate, 'second');

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

  return (
    <div>
      {shuffledPosts.map((post: any, index: number) => {
        // Fallback for name if not provided
        const userName = post?.name || findUserById(post?.user_id)?.name || "Unknown User";

        // Validate date before calculating time ago
        const postTime = post?.date ? timeSince(post.date) : "Unknown time";

        return (
          <div
            key={index}
            className="mt-4 bg-white rounded-lg max-w-[600px] mx-auto"
          >
            {/* Post Header */}
            <div className="flex justify-between px-4 pt-4">
              <div className="flex">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={post?.avatar || "https://via.placeholder.com/40"}
                  alt="User avatar"
                />
                <div className="ml-4">
                  <b>{userName}</b>
                  <p>{postTime}</p>
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
            <div
              className={`mt-4 px-4 ${getImageGridStyle(
                post.content.media.length
              )}`}
            >
              {post.content.media
                ?.slice(0, 6)
                .map((media: any, idx: number) => (
                  <div key={idx} className="relative overflow-hidden">
                    {media.type === "image" && (
                      <Image
                        src={media.url}
                        alt="Preview"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-cover"
                      />
                    )}
                    {media.type === "video" && (
                      <div className="video-container">
                        <video controls>
                          <source src={media.url} type="video/mp4" />
                        </video>
                        <div className="play-button">▶</div>
                      </div>
                    )}
                    {media.type === "link" && (
                      <Link
                        href={media.url}
                        className="w-full h-full object-cover"
                      >
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
                    {post.engagement.reactions.like} likes •{" "}
                    {post.engagement.shares} shares
                  </span>
                </div>
                <div>0 comments</div>
              </div>
              <div className="w-[100%] flex justify-center items-center">
                <hr className="w-[90%]" />
              </div>

              {/* Post Interaction Buttons */}
              <div className="flex p-3 items-center justify-center h-16">
                <button className="w-[32%] border-0 rounded-lg h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
                  <AiOutlineLike /> Like
                </button>
                <button className="w-[32%] border-0 rounded-lg h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
                  <FaRegComment /> Comment
                </button>
                <button className="w-[32%] border-0 rounded-lg h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
                  <FaShare /> Share
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}