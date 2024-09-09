"use client";
import { fetchPosts } from "@/app/services/forClient/fetchPost";
import { fetchUser } from "@/app/services/forClient/fetchUser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiSolidLike } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

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

  // Function to determine image grid size based on the number of images
  const getImageGridStyle = (mediaCount: number) => {
    if (mediaCount === 1) return "w-full";
    if (mediaCount === 2) return "grid grid-cols-2 gap-2";
    if (mediaCount === 3) return "grid grid-cols-3 gap-2";
    if (mediaCount === 4) return "grid grid-cols-4 gap-2";
    return "grid grid-cols-3 gap-2";
  };

  return (
    <div>
      {state.client.posts?.map((post: any, index: number) => {
        const postUser = findUserById(post.user_id);

        return (
          <div key={index} className="mt-4 bg-white rounded-lg max-w-[600px] mx-auto">
            {/* Post Header */}
            <div className="flex justify-between px-4 pt-4">
              <div className="flex">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={postUser?.avatar || "https://via.placeholder.com/40"}
                  alt="User avatar"
                />
                <div className="ml-4">
                  <b>{postUser?.name || "Unknown User"}</b>
                  <p>2 days ago</p>
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
            <div className={`mt-4 px-4 ${getImageGridStyle(post.content.media.length)}`}>
              {post.content.media?.slice(0, 9).map((media: any, idx: number) => (
                <div
                  key={idx}
                  className="relative overflow-hidden"
                >
                  {media.type === "image" && (
                    <img
                      src={media.url}
                      className="w-full h-full object-cover"
                      alt="Post media"
                    />
                  )}
                  {media.type === "video" && (
                    <video className="w-full h-full object-cover" controls>
                      <source src={media.url} type="video/mp4" />
                    </video>
                  )}
                  {media.type === "link" && (
                      <Link href={media.url} className="w-full h-full object-cover">
                      {media.url}
                      </Link>
                  )}

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
