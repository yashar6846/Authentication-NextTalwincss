'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const RegisterForm = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [error, setError]= useState("")

   const handelSubmit =(e) => {
    e.preventDefault()

    if (!name || !email || !password ){
        setError("All fields are required")
        return
    }
   }
  console.log("name? ", name);
  return (
    <div className=" grid place-items-center h-screen">
    <div className=" shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <h1 className="text-xl font-bold my-4">{error}</h1>

      <form onSubmit={handelSubmit} className="flex flex-col gap-3">
      <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Full Name' />
        <input  onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Emile' />
        <input  onChange={(e)=> setPassword(e.target.value)} type="text" placeholder='Password' />
        <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Register</button>
        {error && (
              <div className="bg-red-500 text-white py-1 px-3 text-sm w-fit rounded-md mt-2 ">Error message</div>
        )}
      

        <Link href={"/"} className='text-sm mt-3 text-right'>
          Already have an account? 
          <span className=' underline'>Login</span>
          </Link>
      </form>
    </div>
  </div>
  )
}

export default RegisterForm