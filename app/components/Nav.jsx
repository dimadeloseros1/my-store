"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { BsCart4 } from 'react-icons/bs'
const Nav = () => {
    const {data: session} = useSession()

    const [openMenu, setOpenMenu] = useState(false)

    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }

  return (
    <nav className="flex justify-between items-center bg-white w-[89%] m-auto fixed left-1/2 translate-x-[-50%] rounded-xl top-0 p-6 shadow-xl z-40">
        <Link href={'/'}>
            <h1 className="text-2xl font-bold italic uppercase text-gray-700">My-Store</h1>
        </Link>
        <ul className={`md:flex gap-12 [&>li]:cursor-pointer font-medium absolute md:static top-20 bg-white max-md:p-3 text-center ${openMenu ? "" : "hidden"}`}>
                <li>
                    <Link href='/cart' className='flex items-center space-x-1 text-gray-700 hover:text-gray-900'>
                        <div>
                            <BsCart4 className='w-7 h-7 flex-shrink-0' />
                        </div>
                        <p className='text-lg'>$0.00</p>
                        <span className='text-sm text-gray-500'>(0)</span>
                    </Link>
                </li>
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