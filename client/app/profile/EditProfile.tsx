import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../services/forClient/updateProfile";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebase";

export default function EditProfile({ setEdit }: any) {
  // State hooks for form fields
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [bio, setBio] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState(() => {
    const data = JSON.parse(localStorage.getItem("userLoggedIn") || "{}");
    return data;
  });
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const profileInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

  const findUserById = (userId: string) => {
    return state.client.userList?.find((user: any) => user.id === userId);
  };

  const currentUser = findUserById(user.id);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (e.target.name === "profileImage") {
          setProfileImage(reader.result as string);
        } else if (e.target.name === "bannerImage") {
          setBannerImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadFile = async (file: File, path: string) => {
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  };

  const validateForm = () => {
    if (!name.trim()) {
      alert("Name is required");
      setName(currentUser.username);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsUploading(true);

    try {
      const profileImageFile = profileInputRef.current?.files?.[0];
      const bannerImageFile = bannerInputRef.current?.files?.[0];

      const profileImageURL = profileImageFile
        ? await uploadFile(profileImageFile, `media/profileImages/${profileImageFile.name}`)
        : currentUser.avatar;

      const bannerImageURL = bannerImageFile
        ? await uploadFile(bannerImageFile, `media/bannerImages/${bannerImageFile.name}`)
        : currentUser.banner;

      const updatedProfile = {
        ...currentUser,
        avatar: profileImageURL,
        banner: bannerImageURL,
        bio,
        username: name,
      };

      dispatch(updateProfile(updatedProfile));
      setEdit(false);
    } catch (error) {
      console.error("Error uploading file or updating profile:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              name="profileImage"
              ref={profileInputRef}
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 border-gray-300 rounded-md"
            />
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="mt-2 w-32 h-32 object-cover rounded-full"
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Banner Image
            </label>
            <input
              type="file"
              name="bannerImage"
              ref={bannerInputRef}
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 border-gray-300 rounded-md"
            />
            {bannerImage && (
              <img
                src={bannerImage}
                alt="Banner"
                className="mt-2 w-full h-32 object-cover rounded"
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full text-sm text-gray-500 border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full text-sm text-gray-500 border-gray-300 rounded-md"
              rows={4}
            />
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              disabled={isUploading}
            >
              {isUploading ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => setEdit(false)}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}