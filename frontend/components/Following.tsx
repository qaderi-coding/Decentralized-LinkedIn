import React from 'react'
import { BsInfoSquareFill } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'
const Following = () => {
  return (
    <div className="border-lg flex flex-col gap-y-3 rounded-lg border-gray-300 bg-white p-4">
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
        <div className="info">
          <h3 className="font-bold">Hikmat Najafi</h3>
          <p className="text-gray-500">
            Full Stack Web Developer | ReactJS,
            <br /> NodeJS, MongoDB, NFT marketplace
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-gray-400 py-1 px-3 text-left font-medium opacity-80 hover:opacity-100"
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
        <div className="info">
          <h3 className="font-bold">Hikmat Najafi</h3>
          <p className="text-gray-500">
            Full Stack Web Developer | ReactJS,
            <br /> NodeJS, MongoDB, NFT marketplace
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-gray-400 py-1 px-3 text-left font-medium opacity-80 hover:opacity-100"
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
        <div className="info">
          <h3 className="font-bold">Hikmat Najafi</h3>
          <p className="text-gray-500">
            Full Stack Web Developer | ReactJS,
            <br /> NodeJS, MongoDB, NFT marketplace
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-gray-400 py-1 px-3 text-left font-medium opacity-80 hover:opacity-100"
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
