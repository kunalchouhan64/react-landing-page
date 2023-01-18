import React from 'react'

const CTA = () => {
  return (
    <>
      <section className=" h-96 px-36 pt-2">

        <div className="bg-black-gradient-2 box-shadow h-[17rem] rounded-xl flex justify-around items-center">
          <div className="text space-y-6">
            <h1 className='font-poppins text-[2.80rem] text-white font-semibold'>Let's try our services now!</h1>
            <div>
              <p className='w-[24.7rem] font-poppins text-white text-base'>Everything you need to accept card payment. and grow your business anywhere on the planet.</p>
            </div>
          </div>
          <div className="button">
            <button className='py-4 px-7 font-[500] font-poppins text-lg bg-blue-gradient rounded-lg'>Get Started</button>
          </div>
        </div>

      </section>
    </>
  )
}

export default CTA