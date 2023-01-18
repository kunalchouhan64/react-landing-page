import React from 'react'
import { star, shield, send } from '../assets/'

const Business = () => {
  return (
    <>
      <section className='h-[70vh] px-36 flex justify-between items-center bg-green400'>

        <div className='Text Left h-96 w-[30rem]'>
          <div className='space-y-1'>
            <h1 className='font-poppins text-[2.50rem] text-white font-[500]'>You do the business,</h1>
            <h1 className='font-poppins text-[2.50rem] text-white font-[500]'>we'll handle the money.</h1>
          </div>


          <div className='pt-6'>
            <p className='w-[26rem] text-white font-[300]'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit card on the market.</p>
          </div>
          <div className='pt-9'>
            <button className='py-3 px-4 font-[500] font-poppins text-sm bg-blue-gradient rounded-lg'>Get Started</button>
          </div>
        </div>

        <div className='Graphics Right h-96 w-[32rem] space-y-9 flex flex-col items-start'>

          <div className='flex space-x-5 px-4'>
            <div className="icon pt-2">
              <img className='p-4 rounded-full bg-slate-900' src={star} alt="start" />
            </div>
            <div className="text space-y-1">
              <h2 className='font-[500] font-poppins text-white'>Rewards</h2>
              <p className='text-white w-4/5 font-extralight'>The best credit card offer some tantalizing combinatoin of promotions and prizes</p>
            </div>
          </div>

          {/* 22 */}

          <div className='flex space-x-5 py-5 px-4 rounded-xl bg-black-gradient'>
            <div className="icon pt-2">
              <img className='p-4 rounded-full bg-slate-900' src={shield} alt="start" />
            </div>
            <div className="text space-y-1">
              <h2 className='font-[500] font-poppins text-white'>100% Secure</h2>
              <p className='text-white w-4/5 font-extralight'>We take proactive steps make sure your information and transaction are secure.</p>
            </div>
          </div>

          {/* 33 */}

          <div className='flex space-x-5 px-4'>
            <div className="icon pt-2">
              <img className='p-4 rounded-full bg-slate-900' src={send} alt="start" />
            </div>
            <div className="text space-y-1">
              <h2 className='font-[500] font-poppins text-white'>Balance Transfer</h2>
              <p className='text-white w-4/5 font-extralight'>The best credit card offer some tantalizing combinatoin of promotions and prizes</p>
            </div>
          </div>





        </div>

      </section>
    </>
  )
}

export default Business