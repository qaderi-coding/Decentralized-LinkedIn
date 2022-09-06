import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Input } from '../components/Input'
import Widgets from '../components/Widgets'
import Feed from '../components/Feed'
const style = {
  wrapper: `bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6`,
  content: 'flex justify-center items-start gap-x-5 px-4',
}

const Home: NextPage = () => (
  <>
    <Navbar />
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  </>
)

export default Home
