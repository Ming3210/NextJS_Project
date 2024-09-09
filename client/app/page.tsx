"use client";
import Contacts from "@/components/contacts/page";
import Feed from "@/components/feeds/page";
import Post from "@/components/posts/page";
import Sidebar from "@/components/sidebar/page";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./services/forClient/fetchUser";
export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const dispatch:any = useDispatch();
  const state = useSelector((state: any) => state);

  useEffect(() => {
    const fetchLoginState = () => {
      try {
        const data = localStorage.getItem("loginState");
        setIsLoggedIn(data ? JSON.parse(data) === true : false);
      } catch (error) {
        console.error("Error parsing loginState from localStorage:", error);
        setIsLoggedIn(false);
      }
    };

    fetchLoginState();
  }, []); // Runs once on mount

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(fetchUser());

    }
  }, [isLoggedIn, dispatch]); // Fetch user data when logged in status changes

  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="flex mt-4 justify-between">
      <div className="w-[20%] h-[calc(100vh-1rem)] sticky top-[5rem] custom-scroll overflow-y-auto">
        <Sidebar />
      </div>
      <div className="w-[40%]">
        <Post />
        <Feed />
      </div>
      <div className="w-[18%] h-[calc(100vh-1rem)] sticky top-[5rem] overflow-y-auto custom-scroll">
        <Contacts />
      </div>
    </div>
  );
}
