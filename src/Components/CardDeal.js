import React from 'react'
import { card } from '../assets/'

const CardDeal = () => {
  return (
    <>
      <section className='h-[70vh] px-36 flex justify-between items-start'>

        <div className='Text Left h-96 w-[30rem]'>
          <div className='space-y-1'>
            <h1 className='font-poppins text-[2.50rem] text-white font-[500]'>Find a better card deal</h1>
            <h1 className='font-poppins text-[2.50rem] text-white font-[500]'>in a few easy steps.</h1>
          </div>


          <div className='pt-8'>
            <p className='w-[26rem] text-white font-[300]'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit card on the market.</p>
          </div>
          <div className='pt-10'>
            <button className='py-3 px-4 font-[500] font-poppins text-sm bg-blue-gradient rounded-lg'>Get Started</button>
          </div>
        </div>

        <div className='Graphics Right h-96 w-[32rem] space-y-9 flex flex-col items-start'>
          <img src={card} alt="" />

        </div>

      </section>
    </>
  )
}

export default CardDeal