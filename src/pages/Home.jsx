import React from 'react'
import {Button} from 'antd'
import {motion} from 'framer-motion'

function Home() {
  return (
    <div className=' w-full '>
      <div className=' w-full h-[500px] flex justify-center items-center'>
        <div className=' max-w-3xl'>
          <p className='border inline rounded-full bg-black/20 backdrop-blur-sm px-5'>Batch 2024 BCA</p>
            <h1 className='text-shadow-sm'>Unpredictable <span className='text-green-400'>Coders</span></h1>
            <p className='text-neutral-400 text-sm'>A community where developers build, share, and grow together. Forge the future in our digital architect's sanctuary.</p>
            <section className='flex justify-center gap-5'>
                <Button className='mt-5 px-15!'>Join us</Button>
                <Button className='mt-5 px-15!'>Join us</Button>
            </section>
        </div>
      </div>

    <motion.div 
    initial={{y:10, opacity:0, scale:0.9}}
    animate={{y:0, opacity:1, scale:1}}
    transition={{duration:1}}
    
    className='bg-red-400 h-full mx-5 rounded-md shadow-sm'>
        <img src="/img/code.png" alt="img" className='w-full h-full object-cover rounded-md shadow-sm'/>
    </motion.div>

    <div className=' h-[300px] mt-5 border-t border-gray-200'>
        
    </div>

    </div>
  )
}

export default Home
