"use client";

import { fetchPosts } from "@/app/services/forClient/fetchPost";
import { posting } from "@/app/services/forClient/posting";
import { storage } from "@/config/firebase";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Upload() {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]); // Array to hold multiple file previews
  const [inputValue, setInputValue] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false); // For handling upload state
  const [userLogin, setUserLogin] = useState<any>(() => {
    let data = JSON.parse(localStorage.getItem("userLoggedIn") || "{}");
    return data;
  });

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const [post, setPost] = useState<any>({
    id: Math.ceil(Math.random() * 1000000000).toString(),
    user_id: "",
    date:new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }),
    content: {
      text: "",
      media: [],
    },
    status: "public",
    engagement: {
      shares: 0,
      reactions: {
        like: 0,
        love: 0,
        wow: 0,
        sad: 0,
        angry: 0,
      },
    },
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setPost((prevPost: any) => ({
      ...prevPost,
      content: {
        ...prevPost.content,
        text: value,
      },
    }));
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const previews = Array.from(files).map((file) => URL.createObjectURL(file));
      setSelectedFiles(previews);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const files = inputRef.current?.files;
  
    if (!files) return;
  
    setIsUploading(true);
  
    try {
      const mediaUploads = await Promise.all(
        Array.from(files).map(async (file) => {
          const fileRef = ref(storage, `media/${file.name}`);
          const snapshot = await uploadBytes(fileRef, file);
          const downloadURL = await getDownloadURL(fileRef);
  
          // Determine the media type based on the file MIME type
          let mediaType = "";
          if (file.type.startsWith("image/")) {
            mediaType = "image";
          } else if (file.type.startsWith("video/")) {
            mediaType = "video";
          }
  
          return { type: mediaType, url: downloadURL };
        })
      );
  
      const updatedPost = {
        ...post,
        user_id: userLogin.id,
        content: {
          ...post.content,
          media: [...post.content.media, ...mediaUploads],
        },
      };
  
      setPost(updatedPost);
  
      // Dispatch the updated post after state update
      setTimeout(() => {
        dispatch(posting(updatedPost));
        console.log("After dispatch:", state);
      }, 0);
  
      console.log("Upload complete");
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] h-[60%]">
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl mb-4">Upload Your Content</h2>
          <div className="flex justify-center items-center gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.eUl6rtKIYw0N85xHyA6bjAHaHa?rs=1&pid=ImgDetMain"
              className="w-[40px] rounded-full items-center h-[40px]"
              alt="User profile"
            />
            <input
              type="text"
              value={inputValue}
              className="h-[30px] w-[250px] rounded-lg p-2"
              onChange={handleChange}
              placeholder="What are you doing?"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input ref={inputRef} multiple onChange={handleFileChange} type="file" accept="video" name="file" />
          </div>
          <div className="flex flex-wrap justify-center">
            {selectedFiles.length > 0 &&
              selectedFiles.map((file, index) => (
                <div key={index} className="m-2">
                  <Image
                    src={file}
                    alt={`Selected file preview ${index + 1}`}
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                </div>
              ))}
          </div>
          <br />
          <div className="flex justify-center">
            <button
              className="w-[80%] bg-blue-500 text-white p-2 rounded-lg"
              onClick={handleUpload}
              type="submit"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
