"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../services/forClient/fetchUser";
import Post from "@/components/posts/page";
import { fetchPosts } from "../services/forClient/fetchPost";
import FeedById from "@/components/feeds/FeedById";
import EditProfile from "./EditProfile";
import { useRouter, useSearchParams } from "next/navigation";
import { updateProfile } from "../services/forClient/updateProfile";

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state: any) => state);

  const [isEditing, setIsEditing] = useState(false);
  const [accept, setAccept] = useState<any>(false);
  const [userLogin, setUserLogin] = useState<any>(() => {
    let data = JSON.parse(localStorage.getItem("userLoggedIn") || "{}");
    return data;
  });
  const [loading, setLoading] = useState(true);

  // Fetch user data from localStorage

  // Fetch user and posts data when the component mounts
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchPosts());
  }, [dispatch]);

  const findUserById = (userId: string) => {
    return state.client.userList?.find((user: any) => user.id === userId);
  };

  const searchParams = useSearchParams();
  const userIdFromQuery = searchParams.get("id"); // Get the userId from the URL query params

  // Determine the current user being viewed
  const currentUser = userIdFromQuery
    ? findUserById(userIdFromQuery)
    : findUserById(userLogin?.id);

  // Check if the currently logged-in user is viewing their own profile
  const isOwnProfile = currentUser?.id === userLogin?.id;

  // console.log(isOwnProfile);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  let currentProfile = findUserById(userLogin.id);

  const hasReceivedFriendRequest = currentProfile?.friendRequestsSent?.some(
    (request: any) => request.id == currentUser?.id
  );

  // console.log(currentUser,991111111111111111);
  // console.log(userLogin,777777);
  // console.log(hasReceivedFriendRequest,989898989890);

  const addFriend = () => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        friendRequestsSent: [
          ...currentUser.friendRequestsSent, // Spread existing friend requests
          { id: userLogin.id }, // Add new friend request
        ],
      };
      dispatch(updateProfile(updatedUser));
    }
  };

  const cancelRequest = () => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        friendRequestsSent: currentUser.friendRequestsSent.filter(
          (request: any) => request.id !== userLogin.id
        ),
      };
      dispatch(updateProfile(updatedUser));
    }
  };

  
  // Delay rendering for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1 second
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  const areUsersFriends = currentProfile?.friends?.some(
    (friend: any) => friend.userId === userIdFromQuery
  );

  const handleAccept = (requesterId: string) => {
    // console.log(requesterId);

    const requestIndex = currentProfile?.friendRequestsSent?.findIndex(
      (friendRequest: any) => friendRequest.id === requesterId
    );

    

    if (requestIndex !== -1) {
      // Ensure `friendRequestsSent` is an array
      const updatedFriendRequestsSent1 = [
        ...(currentProfile.friendRequestsSent || []).slice(0, requestIndex),
        ...(currentProfile.friendRequestsSent || []).slice(requestIndex + 1),
      ];

      // Update the local state with the modified friendRequestsSent array
      const updatedUser = {
        ...currentProfile,
        friends: [
          ...currentProfile.friends,
          {
            userId: requesterId,
            add_at: new Date().toISOString().slice(0, 10),
          }, // Add the new friend
        ],
        friendRequestsSent: updatedFriendRequestsSent1, // Use the updated array here
      };

      // console.log(updatedUser);
      

      //   // Find the userFriend based on userFP
      const userF = findUserById(requesterId);
      console.log(userF);
      

      // const friendIndex = userF?.friendRequestsSent?.findIndex(
      //   (friend: any) => friend.id == userLogin.id
      // );

      if (userF) {
       

        const updatedUserFriend = {
          ...userF,
          friends: [
            ...userF.friends,
            {
              userId: currentProfile.id,
              add_at: new Date().toISOString().slice(0, 10),
            },
          ],
          
        };

        console.log(updatedUser);
        console.log(updatedUserFriend);

        dispatch(updateProfile(updatedUser));
        dispatch(updateProfile(updatedUserFriend));
      }
    }
  };

  const handleDecline = (requesterId: string) => {
    const requestIndex = currentProfile?.friendRequestsSent?.findIndex(
      (friendRequest: any) => friendRequest.id === requesterId
    );

    if (requestIndex !== -1) {
      // Ensure `friendRequestsSent` is an array
      const updatedFriendRequestsSent1 = [
        ...(currentProfile.friendRequestsSent || []).slice(0, requestIndex),
        ...(currentProfile.friendRequestsSent || []).slice(requestIndex + 1),
      ];

      // Update the local state with the modified friendRequestsSent array
      const updatedUser = {
        ...currentProfile,
        friendRequestsSent: updatedFriendRequestsSent1, // Use the updated array here
      };
      dispatch(updateProfile(updatedUser))
  }
}

  return (
    <div>
      {isEditing && <EditProfile setEdit={toggleEditMode} />}
      <div className="flex justify-center">
        <div className="w-[80%] bg-white rounded-md">
          <div>
            {/* Banner Image */}
            <Image
              src={currentUser?.banner || ""}
              width={0}
              height={400}
              className="w-full object-cover"
              unoptimized
              alt="Profile Banner"
            />

            {/* Profile Section */}
            <div className="flex justify-between">
              <div className="relative bottom-10 flex items-center gap-5">
                <img
                  src={currentUser?.avatar || ""}
                  className="w-[150px] h-[150px] rounded-full"
                  alt="User Avatar"
                />
                <div>
                  {currentUser ? (
                    <>
                      <span className="font-bold text-[24px]">
                        {currentUser.username}
                      </span>
                      <br />
                      <p>{currentUser.friends?.length} friends</p>
                    </>
                  ) : (
                    <span>Loading...</span>
                  )}
                </div>
              </div>

              <div className="mr-7 flex items-center">
                {isOwnProfile ? (
                  <button
                    onClick={toggleEditMode}
                    className="bg-slate-500 text-white px-5 py-3 rounded-md"
                  >
                    {isEditing ? "Editing" : "Edit Profile"}
                  </button>
                ) : (
                  <>
                    {areUsersFriends ? (
                      <button className="bg-green-500 text-white px-5 py-3 rounded-md">
                        Friend
                      </button>
                    ) : hasReceivedFriendRequest ? (
                   <div className="flex gap-5">
                      <button
                        onClick={() => handleDecline(currentUser.id)}
                        className="bg-red-500 text-white px-5 py-3 rounded-md"
                      >
                        Decline
                      </button>
                       <button
                        onClick={() => handleAccept(currentUser.id)}
                        className="bg-yellow-500 text-white px-5 py-3 rounded-md"
                      >
                        Accept
                      </button>
                   </div>
                    ) : currentUser?.friendRequestsSent?.some(
                        (request: any) => request.id === userLogin?.id
                      ) ? (
                      <button
                        onClick={cancelRequest}
                        className="bg-yellow-500 text-white px-5 py-3 rounded-md"
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        onClick={addFriend}
                        className="bg-blue-500 text-white px-5 py-3 rounded-md"
                      >
                        Add Friend
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-around mt-4 border-t-2 border-solid border-0 border-t-red-400">
            {/* Friend List Section */}
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div>
                  <b>Friends</b>
                  <p>{currentUser?.friends?.length || 0} friends</p>
                </div>
                <p>See all friends</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {currentUser?.friends?.length > 0 ? (
                  currentUser.friends.map((friendId: any) => {
                    const friend = findUserById(friendId.userId);
                    return (
                      <div key={friendId} className="py-1">
                        {friend ? (
                          <img
                            src={friend.avatar}
                            className="w-[100px] rounded-lg"
                            alt={friend.username}
                          />
                        ) : (
                          "Friend not found"
                        )}
                      </div>
                    );
                  })
                ) : (
                  <span>No friends found</span>
                )}
              </div>
            </div>

            {/* Posts Section */}
            <div className="w-[60%]">
              <Post />
              <FeedById />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
