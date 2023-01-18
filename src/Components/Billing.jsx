import React from 'react'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <>
      <section className='h-[80vh] px-36 flex justify-between items-start bg-green400'>



        <div className='Graphics Left h-96 w-[32rem] flex flex-col'>

          <img className=' shadow-pink-200 relative z-[5]' src={bill} alt="" />
          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
          <div className='absolute z-[0] -left-1/2 top-0 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />


        </div>

        <div className='Text Right h-96 w-[30rem] pt-8'>
          <div className='space-y-1'>
            <h1 className='font-poppins text-[2.60rem] text-white font-[500]'>Easily control your</h1>
            <h1 className='font-poppins text-[2.60rem] text-white font-[500]'>billing & invoicing.</h1>
          </div>


          <div className='pt-6'>
            <p className='w-[26rem] text-white font-[300]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias excepturi dicta temporibus inventore numquam perferendis! Ullam blanditiis, incidunt libero voluptates.</p>
          </div>


          <div className='pt-12 flex space-x-6'>
            <div><img src={apple} alt="" /></div>
            <div><img src={google} alt="" /></div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Billing