import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { CreatePost } from '../components/CreatePost'
const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#f3f2ef] tex-white`,
  content: `mx-w-[1400px] w-2/3 flex justify-between`,
}

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar />
          <CreatePost />
          <div>Recomondations</div>
        </div>
      </div>
    </>
  )
}

export default Home
