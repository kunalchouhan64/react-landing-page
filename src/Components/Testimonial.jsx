import React from 'react'
import { quotes, people01, people02, people03 } from '../assets'

const Testimonial = () => {
  return (
    <>
      <section className='h-[100vh] bg-green400'>
        <div className="onlytext px-36 pt-14 flex justify-between items-center">
          <div>
            <h1 className='font-poppins text-[2.90rem] text-white font-[500]'>
              <span className='text-gradient font-semibold'> What poeple</span> are
            </h1>
            <h1 className='font-poppins text-[2.90rem] text-white font-[500]'>saying <span className='text-gradient font-semibold'>about us</span> </h1>
          </div>

          <div>
            <p className='w-[24.7rem] font-poppins text-white'>Everything you need to accept card payment. and grow your business anywhere on the planet.</p>
          </div>
        </div>

        <div className="3div flex justify-center gap-8 pt-16">

          <div className="firstdiv py-14 px-8 bg-black-gradient h-[22.3rem] rounded-xl space-y-10">
            <img src={quotes} alt="" />
            <p className='w-72 font-poppins text-white'>Money is a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
            <div className='flex space-x-3  items-center'>
              <img className='h-14' src={people01} alt="" />
              <div>
                <h2 className='font-poppins text-lg text-white'>Harman Jensen</h2>
                <p className='text-slate-500 font-light font-poppins'>Founder & Leader</p>
              </div>
            </div>
          </div>

          <div className="firstdiv py-14 px-8 h-[22.3rem] rounded-xl space-y-10">
            <img src={quotes} alt="" />
            <p className='w-72 font-poppins text-white'>Money is a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
            <div className='flex space-x-3  items-center'>
              <img className='h-14' src={people02} alt="" />
              <div>
                <h2 className='font-poppins text-lg text-white'>Steve Mark</h2>
                <p className='text-slate-500 font-light font-poppins'>Marketing Manager</p>
              </div>
            </div>
          </div>


          <div className="firstdiv py-14 px-8 h-[22.3rem] rounded-xl space-y-10">
            <img src={quotes} alt="" />
            <p className='w-72 font-poppins text-white'>Money is a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
            <div className='flex space-x-3  items-center'>
              <img className='h-14' src={people03} alt="" />
              <div>
                <h2 className='font-poppins text-lg text-white'>Kenn Williamsan</h2>
                <p className='text-slate-500 font-light font-poppins'>AWS Specialists</p>
              </div>
            </div>
          </div>





          <div className="thirddiv"></div>
        </div>
      </section>
    </>
  )
}

export default Testimonial