import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../assets'

const Client = () => {
  return (
    <>
      <section className="py-2 client flex justify-center gap-20 items-start h-40">
        <div>
          <img className='h-14' src={airbnb} alt="" />
        </div>
        <div className='pt-2'>
          <img className='h-10' src={binance} alt="" />
        </div>
        <div className='pt-1'>
          <img className='h-9' src={coinbase} alt="" />
        </div>
        <div className='pt-1'>
          <img className='h-10' src={dropbox} alt="" />
        </div>
      </section>
    </>
  )
}

export default Client