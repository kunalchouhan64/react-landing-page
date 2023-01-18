import React from 'react'
// import { stats } from '../Context/Indexx'

const Stats = () => {
  return (
    <>
      <section className='h-[20vh] pt-12'>


        <div className="px-20 py-4 h-12 flex justify-evenly items-center">
          <div className='flex space-x-4 items-center'>

            <p className='text-4xl text-white font-bold font-poppins'>3800+</p>
            <h1 className='text-gradient font-semibold pt-1 font-poppins'>USER ACTIVE</h1>

          </div>

          <div className=' text-gradient '>|</div>

          <div className='flex space-x-3 text-white'>
            <p className='text-4xl text-white font-bold font-poppins'>230+</p>
            <h1 className='text-gradient font-semibold pt-2 font-poppins'>TRUSTED BY COMPANY</h1>
          </div>

          <div className=' text-gradient '>|</div>

          <div className='flex space-x-3'>
            <p className='text-4xl text-white font-bold font-poppins'>$250M+</p>
            <h1 className='text-gradient font-semibold pt-2 font-poppins'>TRANSACTIONS</h1>
          </div>

        </div>
      </section>

      {/* <section className='h-[20vh] pt-12 bg-green-500'>

        {
          stats.map((stat) => (
            <div className="px-20 py-4 h-12 flex justify-around items-center">
              <div className='flex space-x-4 items-center' key={stat.id}>

                <p className='text-4xl text-white font-bold font-poppins'>{stat.value}</p>
                <h1 className='text-gradient font-semibold pt-3'>{stat.title}</h1>

              </div>
            </div>
          ))
        }

      </section> */}
    </>
  )
}

export default Stats