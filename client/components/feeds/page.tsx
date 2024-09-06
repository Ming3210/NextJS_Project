import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiSolidLike } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { MdClose } from "react-icons/md";

export default function Feed() {
  return (
    <div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
        <div className="mt-4 bg-white rounded-lg">
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/458313298_895839559235497_8769130099882435735_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8xCJ70XIbdz8Z0hs4qo28aDmCskItJJxoOYKyQi0knOxkOslKJxBwZjIckTHnbS4g_4gy5fwi1-F8uQ57b9Mz&_nc_ohc=S_HUYJwZsVMQ7kNvgE9luVh&_nc_ht=scontent.fhan18-1.fna&oh=00_AYAbiEWRmm0Bc93gDoU35oXFN91SVIx1kMDrzxT8nH8VwQ&oe=66DF407D"
            alt=""
          />
          <div className="ml-4">
            <b>Pham Van Minh</b>
            <p>2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiDotsHorizontalRounded className="w-[30px] h-[30px]" />
          <MdClose className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4">Link kơ sồ kừn</div>

        <div className="mt-4">
          <img
            src="https://th.bing.com/th/id/OIP.hbi6W86jSfmu95RcHiPP1gHaEK?rs=1&pid=ImgDetMain"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between py-3 px-5">
          <div className=" justify-center gap-2 flex items-center">
            <BiSolidLike className="bg-blue-700 p-1 rounded-full text-white text-[24px]" />{" "}
            8
          </div>
          <div>0 comments</div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
        <hr className="w-[90%]" />
        </div>
        <div className="flex p-3 items-center justify-center h-16">
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300">
            <AiOutlineLike /> Like
            </button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaRegComment /> Comment</button>
            <button className="w-[32%] rounded-lg border-0 h-10 bg-white flex items-center justify-center gap-3 text-[16px] hover:bg-slate-300"><FaShare /> Share</button>
        </div>
        
      </div>
    </div>
    </div>
  );
}
