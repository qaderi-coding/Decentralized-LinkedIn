import React from 'react'
import { FaHome, FaUserCog } from 'react-icons/fa'
import { MdWork, MdOutlineArrowDropDown } from 'react-icons/md'
import { TbMessage, TbMessageDots } from 'react-icons/tb'
import { IoMdNotifications } from 'react-icons/io'
import { VscListFilter } from 'react-icons/vsc'
const style = {
  wrapper: 'bg-white flex justify-between',
  navBar: 'p-4 flex justify-between',
  searchBar: 'flex justify-between items-center',
  logo: 'h-8 mr-1',
  input: 'bg-[#eef3f8] py-1 rounded-sm',
  navItems: 'flex',
  navItem: 'flex flex-col px-4',
  icon: 'self-center',
  profile: 'flex justify-center',
}
const Navbar = () => {
  return (
    <div className="wrapper">
      <nav className={style.navBar}>
        <div className={style.searchBar}>
          <img className={style.logo} src="./logo.png" />
          <div className={style.searchInput}>
            <i></i>
            <input className={style.input} type="text" placeholder="Searchs" />
          </div>
        </div>
        <ul className={style.navItems}>
          <li className={style.navItem}>
            <FaHome className={style.icon} size={30} />
            <div>Home</div>
          </li>
          <li className={style.navItem}>
            <FaUserCog className={style.icon} size={30} />
            <div className={style.lable}>
              <div>My Network</div>
            </div>
          </li>
          <li className={style.navItem}>
            <MdWork className={style.icon} size={30} />
            <div className={style.lable}>
              <div>Jobs</div>
            </div>
          </li>
          <li className={style.navItem}>
            <TbMessageDots className={style.icon} size={30} />
            <div className={style.lable}>
              <div>Messaging</div>
            </div>
          </li>
          <li className={style.navItem}>
            <IoMdNotifications className={style.icon} size={30} />
            <div className={style.lable}>
              <div>Notifications</div>
            </div>
          </li>
          <li className={style.navItem}>
            <img
              className="h-7 w-7 rounded-full"
              src="ehsan.jpg"
              alt="Rounded avatar"
            />
            <div className={style.profile}>
              <span>Me</span>
              <MdOutlineArrowDropDown className="self-center" size={25} />
            </div>
          </li>
          <li className={style.navItem}>
            <VscListFilter className={style.icon} size={30} />
            <div className={style.profile}>
              <span>work</span>
              <MdOutlineArrowDropDown className="self-center" size={25} />
            </div>
          </li>
          <li className={style.navItem}>
            <a className="flex self-center">Try premium for free</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
