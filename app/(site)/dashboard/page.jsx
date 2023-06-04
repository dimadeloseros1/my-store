"use client"

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const dashboard = () => {
    const {data: session} = useSession()
  return (
      <div className="flex justify-between gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
        <div className='text-xl font-bold'>
            <div>Dashboard</div>
        </div>
        <div className='flex items-center gap-4'>
            <p>Hi <span className='text-green-600'>{session?.user?.name}</span></p>
        </div>
        <button onClick={() => signOut()} className='border p-1 rounded-md hover:bg-slate-50 transition-all hover:text-blue-400'>Sign Out</button>
    </div>
  )
}

export default dashboard