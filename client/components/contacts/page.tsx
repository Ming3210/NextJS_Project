import { fetchPosts } from "@/app/services/forClient/fetchPost";
import { fetchUser } from "@/app/services/forClient/fetchUser";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function Contacts() {
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

  let currentUser = findUserById(user.id);
  
  
  return (
    <div className="">
       {currentUser?.friends.map((friendId:any) => {
        const friend = findUserById(friendId.userId);
        return friend ? (
          <div key={friend.id} className="my-4 flex items-center">
            <img
              className="w-[40px] mr-4 rounded-full h-[40px]"
              src={friend.avatar}
              alt={friend.username} // Fallback if no username
            />
            <span>{friend.username}</span>
          </div>
        ) : null;
      })}
    </div>
  );
}
