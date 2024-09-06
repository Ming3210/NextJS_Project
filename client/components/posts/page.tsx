import React from 'react'

export default function Post() {
  return (
   <div className='bg-white rounded-lg p-6 '>
     <div className='flex justify-center items-center gap-4  border-solid border-b-2 border-0'>
        <img className='w-[40px] h-[40px] rounded-full mb-4' src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
        <input type="text" className='w-full rounded-full mb-4 h-[35px] p-5' placeholder='What on your mind, Minh?'/>
    </div>
    <div className='flex mt-5'>
        <button className='w-[50%] rounded-lg flex items-center border-0 bg-white  hover:bg-slate-300  justify-center'><img className='w-[50px] h-[50px] rounded-full' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTroB-f19Ji9DZOlE3IuJoT5xeuU1lXJFvkMcTwBwY7B5UaMb5V" alt="" />Photo/Video</button>
        <button className='w-1/2 flex border-0 rounded-lg items-center bg-white hover:bg-slate-300  justify-center'><img className='w-[50px] h-[50px] rounded-full' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvB5EkMpwoPPYd9SmsQOgOX220x_w_mzdPr49NBmnPRH602uH3" alt="" />Feeling/Activity</button>
    </div>
   </div>
  )
}
