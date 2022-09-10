import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { AiOutlineLike } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'
import { RiSendPlaneFill } from 'react-icons/ri'
const style = {
  content:
    'bg-white dark:bg-[#1D2226] rounded-lg p-4 space-y-4 border border-gray-300 dark:border-none"',
}
const Post = () => {
  return (
    <div className={style.content}>
      <div className="flex items-start justify-start gap-3">
        <img
          className="mr-1 h-10 w-10 rounded-full"
          src="ehsan.jpg"
          alt="Rounded avatar"
        />
        <div className="flex flex-col">
          <h3 className="font-bold">Hikmat Najafi</h3>
          <p className="text-gray-500">HR Specialist at Gigmo Solutions</p>
          <div className="flex items-center justify-start gap-2">
            <span className="text-gray-500">1w</span>
            <BiWorld className="text-gray-500" />
          </div>
        </div>
      </div>
      <p>
        Interesting fact: Threat actors have a strong preference for the Go
        programming language because: - Its cross-platform support lets hackers
        target different operating systems through a common codebase- It is more
        challenging to analyse and reverse engineer.
      </p>
      <div className="flex items-center justify-between border-t border-gray-300 p-2  text-gray-600">
        <button className="flex items-center space-x-2">
          <AiOutlineLike />
          <span className="font-bold">Like</span>
        </button>
        <button className="flex items-center space-x-2">
          <BiCommentDetail />
          <span className="font-bold">Comment</span>
        </button>
        <button className="flex items-center space-x-2">
          <RiShareForwardLine />
          <span className="font-bold">Share</span>
        </button>
        <button className="flex items-center space-x-2">
          <RiSendPlaneFill />
          <span className="font-bold">Send</span>
        </button>
      </div>
    </div>
  )
}

export default Post
