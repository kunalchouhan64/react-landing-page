import React from 'react'
import styles from '../Style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <>
      <section id='home' className={`flex ${styles.padding} pt- `}>
        <div className={`flex-1 ${styles.flexStart} flex-col px-6`}>
          <div className='flex flex-row items-center py-[6px] px-2 bg-discount-gradient rounded-[10px] mb-2'>
            <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
            <p className='px-2 space-x-[0.23rem] text-white'>
              <span className='text-white'>20%</span>
              <span>DISCOUNT FOR</span>
              <span className='font-semibold'>1 MONTH </span>
              <span>ACCOUNT </span>
            </p>
          </div>
          <div className='flex flex-row justify-between items-center w-full'>

            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>The Next <br />
              <span className='text-gradient'>
                Generation
              </span></h1>

            <div className="getstarted mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>Payment Method. </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses the methodology to identify the credit cards most likely to fit your need. we examine annual percantage rated, annual fees.
          </p>
        </div>
        <div>
          <img src={robot} alt="billing" className='w-[97%] h-[97%] relative z-[5]' />
          {/* <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' /> */}
          {/* <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' /> */}
          {/* <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 top-0 __gradient' /> */}
        </div>
      </section>
    </>
  )
}

export default Hero