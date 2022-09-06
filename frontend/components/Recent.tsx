import React from 'react'

const Recent = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-4">
      <div className="flex flex-col">
        <h4>Recent</h4>
        <div className="flex items-center space-x-2">
          <span>i</span>
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>i</span>
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>i</span>
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>i</span>
          <span>React developer</span>
        </div>
      </div>
      <div className=" flex flex-col">
        <h4>Groups</h4>
        <div className="flex items-center space-x-2">
          <span>i</span>
          <span>React developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>i</span>
          <span>React developer</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span>Events</span>
          <span>i</span>
        </div>
        <p>followed hashtags</p>
      </div>
      <div>Discover more</div>
    </div>
  )
}

export default Recent
