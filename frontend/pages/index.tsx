import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Input } from '../components/Input'
import Widgets from '../components/Widgets'
import Feed from '../components/Feed'
const style = {
  wrapper: `bg-[#F3F2EF]  h-screen overflow-y-scroll md:space-y-6`,
  content: 'flex justify-center items-start gap-x-5 w-9/12 mx-auto',
}

const Home: NextPage = () => (
  <div className={style.wrapper}>
    <Navbar />
    <div>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  </div>
)

export default Home
