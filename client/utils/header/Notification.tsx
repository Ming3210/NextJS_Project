"use client";
import { fetchUser } from "@/app/services/forClient/fetchUser"; // Import the function to update friend requests
import { updateProfile } from "@/app/services/forClient/updateProfile";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Notification({ closeNotification }: any) {
  const [user, setUser] = useState<any>(() => {
    const data = localStorage.getItem("userLoggedIn");
    return data ? JSON.parse(data) : {};
  });
  const [userFriend, setUserFriend] = useState<any>();

  const search = useSearchParams();
  const userIdFromQuery = search.get("id");

  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser()); // Fetching the current user's updated state
  }, [dispatch]);

  // Find a user by their ID
  const findUserById = (userId: any) => {
    return state.client.userList?.find((user: any) => user.id == userId);
  };

  const userFP = findUserById(userIdFromQuery); // Find user from URL params

  // Get the current logged-in user data from state
  const currentUser = findUserById(user.id);

  // Handle multiple friend requests
  const friendRequests = currentUser?.friendRequestsSent || [];

  // Handle accepting a friend request
  const handleAccept = (requesterId: string) => {
    console.log(requesterId);

    const requestIndex = currentUser?.friendRequestsSent?.findIndex(
      (friendRequest: any) => friendRequest.id === requesterId
    );

    if (requestIndex !== -1) {
      // Ensure `friendRequestsSent` is an array
      const updatedFriendRequestsSent1 = [
        ...(currentUser.friendRequestsSent || []).slice(0, requestIndex),
        ...(currentUser.friendRequestsSent || []).slice(requestIndex + 1),
      ];

      // Update the local state with the modified friendRequestsSent array
      const updatedUser = {
        ...currentUser,
        friends: [
          ...currentUser.friends,
          {
            userId: requesterId,
            add_at: new Date().toISOString().slice(0, 10),
          }, // Add the new friend
        ],
        friendRequestsSent: updatedFriendRequestsSent1, // Use the updated array here
      };
      setUser(updatedUser); // Update local state for user

      //   // Find the userFriend based on userFP
      const userF = findUserById(requesterId);

      setUserFriend(userF);

      if (userF) {
        const updatedUserFriend = {
          ...userF,
          friends: [
            ...userF.friends,
            {
              userId: currentUser.id,
              add_at: new Date().toISOString().slice(0, 10),
            },
          ],
        };

        setUserFriend(updatedUserFriend);

        console.log(updatedUser);
        console.log(updatedUserFriend);

        dispatch(updateProfile(updatedUser));
        dispatch(updateProfile(updatedUserFriend));
      }

      closeNotification(); // Close the notification after accepting
    }
  };

  // Handle declining a friend request
  const handleDecline = (requesterId: string) => {
    const requestIndex = currentUser?.friendRequestsSent?.findIndex(
      (friendRequest: any) => friendRequest.id === requesterId
    );

    if (requestIndex !== -1) {
      // Ensure `friendRequestsSent` is an array
      const updatedFriendRequestsSent1 = [
        ...(currentUser.friendRequestsSent || []).slice(0, requestIndex),
        ...(currentUser.friendRequestsSent || []).slice(requestIndex + 1),
      ];
      const updatedUser = {
        ...currentUser,

        friendRequestsSent: updatedFriendRequestsSent1,
      };

      dispatch(updateProfile(updatedUser));
    }

    closeNotification();
  };

  return (
    <div className="notification bg-white shadow-lg border border-gray-300 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Friend Requests</h3>
        {/* Close button */}
        <button className="text-red-500 font-bold" onClick={closeNotification}>
          X
        </button>
      </div>

      <div>
        {friendRequests.length > 0 ? (
          friendRequests.map((request: any, index: number) => {
            const requester = findUserById(request.id);
            return (
              requester && (
                <div key={index} className="p-2 border-b border-gray-200">
                  <p className="text-gray-600">
                    {`${requester.username} sent you a friend request.`}
                  </p>
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      onClick={() => handleAccept(request.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDecline(request.id)}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              )
            );
          })
        ) : (
          <p className="text-gray-600">No new friend requests.</p>
        )}
      </div>
    </div>
  );
}
