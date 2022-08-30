import React from 'react'

const style = {
  wrapper: '',
  content: 'bg-white p-3',
  postBtnGroup: 'flex justify-between',
  input: 'rounded-xl py-1',
}
export const CreatePost = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="flex">
          <img
            className="mr-1 h-7 w-7 flex-1 rounded-full"
            src="ehsan.jpg"
            alt="Rounded avatar"
          />
          <div>
            <button className="focus:shadow-outline flex-4 h-12 w-full rounded-lg bg-indigo-700 px-6 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">
              button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
