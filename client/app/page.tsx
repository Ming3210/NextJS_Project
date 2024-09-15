"use client";
import Contacts from "@/components/contacts/page";
import Feed from "@/components/feeds/page";
import Post from "@/components/posts/page";
import Sidebar from "@/components/sidebar/page";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./services/forClient/fetchUser";
import { useRouter } from "next/navigation";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const router = useRouter();

  // Check login state on mount
  useEffect(() => {
    const fetchLoginState = () => {
      try {
        const loginState = localStorage.getItem("loginState");
        setIsLoggedIn(loginState ? JSON.parse(loginState) === true : false);
      } catch (error) {
        console.error("Error parsing loginState from localStorage:", error);
        setIsLoggedIn(false);
      }
    };

    fetchLoginState();
  }, []);

  // Fetch user data if logged in
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchUser());
    }
  }, [isLoggedIn, dispatch]);

  // Get user from localStorage after component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("userLoggedIn");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Immediately redirect to sign-in if not logged in
  useEffect(() => {
    // Redirect to sign-in if the user is not logged in or if there is no user data
    if (isLoggedIn === false || (isLoggedIn === true && !user)) {
      router.replace("/sign-in"); // Use replace to avoid adding to history
    }
  }, [isLoggedIn, user, router]);

  // Show a loading state while checking the login status
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  // Render main content if logged in
  if (isLoggedIn === true && user) {
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

  // If for some reason the code execution reaches this point, return null
  return null;
}