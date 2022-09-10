import React from 'react'
import { FaHome, FaUserCog } from 'react-icons/fa'
import { MdWork, MdOutlineArrowDropDown } from 'react-icons/md'
import { TbMessage, TbMessageDots } from 'react-icons/tb'
import { IoMdNotifications } from 'react-icons/io'
import { VscListFilter } from 'react-icons/vsc'
import { BsSearch } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-white text-xs">
      <nav className="mx-auto flex w-9/12 justify-between">
        <div className="flex items-center justify-center">
          <img className="mr-1 h-8" src="./logo.png" />
          <div className="relative">
            <ImSearch
              size={15}
              className="absolute top-2 left-2 font-bold text-gray-600"
            />
            <input
              className="w-72 rounded-md border-none bg-[#eef3f8] py-2 px-8 font-bold text-gray-600"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <ul className="flex items-center text-gray-500">
          <li className="px-4">
            <a href="#" className="flex flex-col py-1 ">
              <FaHome className="self-center text-gray-600" size={25} />
              <div className="">Home</div>
            </a>
          </li>
          <li className="px-4">
            <a className="flex flex-col py-1">
              <FaUserCog className="self-center text-gray-600" size={25} />
              <span>My Network</span>
            </a>
          </li>
          <li className="px-4">
            <a href="" className="flex flex-col py-1">
              <MdWork className="self-center text-gray-600" size={25} />
              <span>Jobs</span>
            </a>
          </li>
          <li className="px-4">
            <a href="" className="flex flex-col py-1">
              <TbMessageDots className="self-center text-gray-600" size={25} />
              <span>Messaging</span>
            </a>
          </li>
          <li className="px-4">
            <a href="" className="flex flex-col py-1">
              <IoMdNotifications
                className="self-center text-gray-600"
                size={25}
              />
              <span>Notifications</span>
            </a>
          </li>
          <li className="px-4">
            <a href="" className="flex flex-col py-1">
              <img
                className="h-5 w-5 rounded-full"
                src="ehsan.jpg"
                alt="Rounded avatar"
              />
              <div className="flex items-center justify-center ">
                <span>Me</span>
                <MdOutlineArrowDropDown
                  className="self-center text-gray-600"
                  size={20}
                />
              </div>
            </a>
          </li>
          <li className="border-l border-gray-300 px-4">
            <a href="" className="flex flex-col py-1">
              <FaHome className="self-center text-gray-600" size={23} />
              <div className="flex items-center justify-center ">
                <span>work</span>
                <MdOutlineArrowDropDown
                  className="self-center text-gray-600"
                  size={20}
                />
              </div>
            </a>
          </li>
          <li className="flex flex-col px-4">
            <a className="flex self-center text-[#915907] underline">
              Try Premium Free
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
