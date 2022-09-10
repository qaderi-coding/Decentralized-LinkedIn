import React from 'react'
import Profile from './Profile'
import Recent from './Recent'

const Sidebar = () => {
  return (
    <div className="side flex min-w-max max-w-lg flex-col gap-3">
      <Profile />
      <Recent />
    </div>
  )
}

export default Sidebar
