import { fetchPosts } from "@/app/services/forClient/fetchPost";
import { fetchUser } from "@/app/services/forClient/fetchUser";
import { useEffect, useState } from "react";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaChevronDown, FaUserFriends } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { GiSaveArrow } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { RiGroup2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

// Define Sidebar component
export default function Sidebar() {
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
  let a = findUserById(user.id);
  
  
  return (
    <div className="sidebar flex flex-col">
      <div className="flex mb-4 items-center ml-5 gap-3">
      <img className="w-[40px] h-[40px] rounded-full" src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg" />{a?.username}
      </div>
      <div className="flex gap-3 mb-4 items-center ">
      <FaUserFriends className="w-[40px] ml-5 h-[40px]" />Friends
      </div>
      <div className="flex gap-3 mb-4 items-center ">
      <RiGroup2Fill className="w-[40px] ml-5 h-[40px]" /> Groups
      </div>
      <div className="flex gap-3 mb-4 items-center ">
      <FcShop className="w-[40px] ml-5 h-[40px]" />Markets
      </div>
      <div className="flex gap-3 mb-4 items-center ">
      <PiVideoLight className="w-[40px] ml-5 h-[40px]" />Videos
      </div>
     <div className="flex gap-3 mb-4 items-center ">
     <MdEventAvailable className="w-[40px] ml-5 h-[40px]" />Events
     </div>
      <div className="flex gap-3 mb-4 items-center ">
      <BiSolidTimeFive className="w-[40px] ml-5 h-[40px]" />Memories
      </div>
     <div className="flex gap-3 mb-4 items-center ">
     <GiSaveArrow className="w-[40px] ml-5 h-[40px]" />  Saves
     </div>    
      <div className="flex gap-3 mb-4 items-center ">
      <FaChevronDown className="w-[40px] ml-5 h-[40px]" /> See more
      </div>
    </div>
  );
}





