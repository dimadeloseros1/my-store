"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
const Nav = () => {
    const {data: session} = useSession()

    const [openMenu, setOpenMenu] = useState(false)

    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }

  return (
    <nav className="flex justify-between items-center bg-white w-[89%] m-auto fixed top-5 left-1/2 translate-x-[-50%] rounded-xl p-6 h-20 shadow-xl bg-opacity-40">
        <Link href={'/'}>
            <h1 className="text-2xl font-bold italic uppercase text-gray-700">Poundlanders</h1>
        </Link>
        <ul className={`md:flex gap-12 [&>li]:cursor-pointer font-medium absolute md:static top-20 bg-white max-md:p-3 text-center ${openMenu ? "" : "hidden"}`}>
                <li className='flex mx-3 gap-2'>
                    <p>Hi</p><span className='text-red-600'>{session?.user?.name}</span>
                </li>
            <a href="/">
                <li className='hover:text-blue-400'>Home</li>
            </a>
            
                <li className='hover:text-blue-400'>
                    <Link href="/login">Login</Link>
                </li> 
            <li>
                <button onClick={() => signOut()} className='hover:text-blue-400'>Sign Out</button>
            </li>
        </ul>
        <div className='md:hidden'>
            <button onClick={menuHandler}>
                {openMenu ? <GrClose size={25}/> : <FiMenu size={25}/>}
            </button>
        </div>
    </nav>
  )
}

export default Nav