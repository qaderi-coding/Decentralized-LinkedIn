import React from 'react'
import Profile from './Profile'
import Recent from './Recent'

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      <Profile />
      <Recent />
    </div>
  )
}

export default Sidebar
