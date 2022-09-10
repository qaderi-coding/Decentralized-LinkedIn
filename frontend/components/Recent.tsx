import React from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'

const Recent = () => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-300 bg-white">
      <h4 className="px-3 pt-2 text-sm">Recent</h4>
      <div className="flex flex-col pl-3 text-xs font-bold leading-6 text-gray-500">
        <div className="flex items-center space-x-2 ">
          <HiUserGroup />
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <HiUserGroup />
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <HiUserGroup />
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <HiUserGroup />
          <span>React developer</span>
        </div>
      </div>
      <h4 className="pl-3 text-sm text-[#0a66c2]">Groups</h4>
      <div className=" flex flex-col pl-3 text-xs font-bold leading-6 text-gray-500">
        <div className="flex items-center space-x-2">
          <HiUserGroup />
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <HiUserGroup />
          <span>React developer</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#0a66c2]">Events</span>
          <AiOutlinePlus className="text-gray-500" />
        </div>
        <p className="text-sm text-[#0a66c2]">followed hashtags</p>
      </div>
      <div className="border-t-2 border-gray-300">
        <p className="p-2 text-center">Discover more</p>
      </div>
    </div>
  )
}

export default Recent
