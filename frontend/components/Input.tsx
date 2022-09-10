import React from 'react'
import { HiPhotograph } from 'react-icons/hi'
import { RiVideoFill } from 'react-icons/ri'
import { MdEvent, MdArticle } from 'react-icons/md'
const style = {
  wrapper: '',
  content:
    'bg-white dark:bg-[#1D2226] rounded-lg p-4 space-y-4 border border-gray-300 dark:border-none"',
  postBtnGroup: 'flex justify-between',
  input: 'rounded-xl py-1',
}
export const Input = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="flex items-center space-x-2">
          <img
            className="mr-1 h-10 w-10 rounded-full"
            src="ehsan.jpg"
            alt="Rounded avatar"
          />
          <button className="w-full rounded-full border border-gray-400 py-2.5 px-3 text-left font-medium opacity-80 hover:opacity-100">
            Start a post
          </button>
        </div>
        <div className="flex justify-between gap-12">
          <button className="flex items-center space-x-2">
            <HiPhotograph className="text-[#378fe9]" />
            <h4>Photo</h4>
          </button>
          <button className="flex items-center space-x-2">
            <RiVideoFill className="text-[#5f9b41]" />
            <span>Video</span>
          </button>
          <button className="flex items-center space-x-2">
            <MdEvent className="text-[#c37d16]" />
            <span>Event</span>
          </button>
          <button className="flex items-center space-x-2">
            <MdArticle className="text-[#e16745]" />
            <span>Write article</span>
          </button>
        </div>
      </div>
    </div>
  )
}
