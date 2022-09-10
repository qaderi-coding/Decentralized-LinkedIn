import React from 'react'
import { BsBookmarkFill } from 'react-icons/bs'
const style = {
  wrapper: `bg-primary`,
  content: `bg-white rounded-lg w-56`,
  coverPhotoContainer: `w-full h-full`,
  coverPhoto: `object-cover h-full w-full rounded-t-lg`,
  profileImageContainer: `w-full h-[4.5rem] rounded-full mt-[-2.5rem] mb-4 flex items-center px-3 flex justify-center`,
  profileImage: `object-cover rounded-full h-full`,
  bio: 'text-center border-b-2 border-black-200 pb-5',
  title: 'font-bold',
  skills: 'text-xs text-gray-500',
  list: 'border-b-2 border-black-200 px-3 py-3 text-xs text-gray-500 font-bold py-2 leading-7',
  listItem: 'flex justify-between',
  tools: 'px-3 text-sm border-b-2 border-black-200 py-2',
  items: 'flex items-center gap-3 pl-3 py-3 font-bold',
}

const Profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.coverPhotoContainer}>
          <img src="img/banner.jpeg" className={style.coverPhoto} />
        </div>
        <div className={style.profileImageContainer}>
          <img src="img/profile.jpeg" className={style.profileImage} />
        </div>
        <div className={style.bio}>
          <div className={style.title}>Ehsanulah Qaderi</div>
          <div className={style.skills}>
            Web Developer | React.js | Express.js | Django/Python
          </div>
        </div>
        <div className={style.list}>
          <div className={style.listItem}>
            <div className={style.listTitle}>Who's viewed your profile</div>
            <div className="text-[#0a66c2]">6</div>
          </div>
          <div className={style.listItem}>
            <div className={style.listTitle}>Impressions of your post</div>
            <div className="text-[#0a66c2]">203</div>
          </div>
        </div>
        <div className={style.tools}>
          <div className="text-xs text-gray-500">
            Access exclusive tools & insights
          </div>
          <div>
            <i></i>
            <div>Try Premium for free</div>
          </div>
        </div>
        <div className={style.items}>
          <BsBookmarkFill className="text-gray-500" />
          <div className="text-sm">My items</div>
        </div>
      </div>
    </div>
  )
}
export default Profile
