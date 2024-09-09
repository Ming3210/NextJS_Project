"use client"
import { useState, useEffect } from "react";
import Header from "@/utils/header/page";

export default function HeaderWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginState = () => {
      try {
        const data = localStorage.getItem("loginState");
        setIsLoggedIn(data ? JSON.parse(data) === true : false);
      } catch (error) {
        console.error("Error parsing loginState from localStorage:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginState();
    
    // Set up an event listener for storage changes
    window.addEventListener("storage", checkLoginState);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("storage", checkLoginState);
  }, []);

  if (isLoggedIn === null) {
    return null; // Optionally render a loader here if needed
  }

  return isLoggedIn ? <Header /> : null;
}
