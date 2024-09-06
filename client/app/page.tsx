import Contacts from '@/components/contacts/page'
import Feed from '@/components/feeds/page'
import Post from '@/components/posts/page'
import Sidebar from '@/components/sidebar/page'
import React from 'react'

export default function Page() {
  return (
    <div className='flex mt-4 justify-between'>
      <div className='w-[20%] h-[calc(100vh-1rem)] sticky top-[5rem]  custom-scroll overflow-y-auto'>
        <Sidebar />
      </div>
      <div className='w-[40%]'>
        <Post />
        <Feed />
      </div>
      <div className='w-[18%] h-[calc(100vh-1rem)] sticky top-[5rem] overflow-y-auto custom-scroll'>
        <Contacts />
      </div>
    </div>
  )
}
