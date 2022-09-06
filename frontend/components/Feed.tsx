import React from 'react'
import { Input } from './Input'
import Post from './Post'

const Feed = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
