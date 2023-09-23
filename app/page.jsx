import Image from 'next/image'
import Link from 'next/link'
import LoginForm from './components/LoginForm'

export default function Home() {
  return (
    <main>
      <div className=" grid place-items-center h-screen">
        <div className=" shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4">Enter the details</h1>

          <form className="flex flex-col gap-3">
            <input type="text" placeholder='Emile' />
            <input type="text" placeholder='Password' />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>

            <div className="bg-red-500 text-white py-1 px-3 text-sm w-fit rounded-md mt-2 ">Error message</div>

            <Link href={"/register"} className='text-sm mt-3 text-right'>
              Dont have an account? 
              <span className=' underline'>Register</span>
              </Link>
          </form>
        </div>
      </div>
    </main>
  )
}
