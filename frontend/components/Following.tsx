import React from 'react'
import { BsInfoSquareFill } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'
const Following = () => {
  return (
    <div className="border-lg flex flex-col gap-y-3 overflow-hidden rounded-lg border-gray-300 bg-white p-4">
      <div className="flex items-center justify-between gap-x-10">
        <h4 className="font-bold">Add to your feed </h4>
        <BsInfoSquareFill />
      </div>
      <div className="flex items-start justify-start gap-3">
        <img
          className="mr-1 h-10 w-10 rounded-full"
          src="ehsan.jpg"
          alt="Rounded avatar"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Hikmat Najafi</h3>
          <p className="text-xs text-gray-500">
            Full Stack Web Developer | ReactJS, NodeJS, MongoDB, NFT marketplace
          </p>
          <button
            type="button"
            className="inline-flex items-center self-start rounded-full border border-gray-400 py-1 px-4 text-left font-medium opacity-80 hover:opacity-100"
          >
            <BiPlus />
            follow
          </button>
        </div>
      </div>
      <div className="flex items-start justify-start gap-3">
        <img
          className="mr-1 h-10 w-10 rounded-full"
          src="ehsan.jpg"
          alt="Rounded avatar"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Hikmat Najafi</h3>
          <p className="text-xs text-gray-500">
            Full Stack Web Developer | ReactJS, NodeJS, MongoDB, NFT marketplace
          </p>
          <button
            type="button"
            className="inline-flex items-center self-start rounded-full border border-gray-400 py-1 px-4 text-left font-medium opacity-80 hover:opacity-100"
          >
            <BiPlus />
            follow
          </button>
        </div>
      </div>
      <div className="flex items-start justify-start gap-3">
        <img
          className="mr-1 h-10 w-10 rounded-full"
          src="ehsan.jpg"
          alt="Rounded avatar"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Hikmat Najafi</h3>
          <p className="text-xs text-gray-500">
            Full Stack Web Developer | ReactJS, NodeJS, MongoDB, NFT marketplace
          </p>
          <button
            type="button"
            className="inline-flex items-center self-start rounded-full border border-gray-400 py-1 px-4 text-left font-medium opacity-80 hover:opacity-100"
          >
            <BiPlus />
            follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default Following
