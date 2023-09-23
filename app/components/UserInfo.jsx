import React from 'react'

const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
       <div className=" shadow-lg p-8 bg-zince-300/40 flex flex-col gap-2 my-64 ">
        <div className="">
            Name: <span className=" font-bold">Yashar</span>
        </div>
        <div className="">
            Email: <span className="font-bold">yashar@gmail.com</span>
        </div>
        <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
            Log Out
        </button>
       </div>
    </div>
  )
}

export default UserInfo