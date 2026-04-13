import { Button } from 'antd'
import React from 'react'

function Navbar() {
  return (
    <>
        <div className=' h-10 border-b border-gray-200 flex justify-start items-center text-[13px] text-gray-500 gap-3 '>
            {/* // left   */}
            <div className=' w-[50%] h-full flex justify-start items-center gap-3 px-4 '>
                <p className='text-lg text-black'>Unpredictable<span className='text-indigo-400'>Coders</span></p>
            </div>
            {/* right  */}
            <div className=' w-[50%] h-full flex justify-end items-center gap-3 px-4'>
                <ul className='flex justify-center gap-5 w-full'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='w-[50%] h-full flex justify-center items-center'>
                    <Button className='px-5! rounded-full!'>Request member</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
