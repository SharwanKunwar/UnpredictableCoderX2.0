import React from 'react'
import {Button} from 'antd'
import {motion} from 'framer-motion'

function Home() {
  return (
    <div className=' w-full '>
      <div className=' w-full h-[400px] flex justify-center items-center'>
        <div className=' max-w-3xl'>
            <h1 className='text-shadow-sm'>Unpredictable Coders</h1>
            <p className='text-neutral-400 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, dolore officiis quasi sint reiciendis quas porro perferendis itaque laudantium fugiat cumque voluptatum odio, distinctio, numquam doloremque recusandae in qui eligendi?</p>
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
