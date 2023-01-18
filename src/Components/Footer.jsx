import React from 'react'
import { logo, facebook, instagram, twitter, linkedin } from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      <section className='h-[40vh] pt-9 flex justify-evenly items-start'>
        <div className='space-y-5 flex flex-col justify-center items-start'>
          <img className='h-20' src={logo} alt="" />
          <p className='font-poppins text-lg w-96 text-white pl-7'>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='bg-red- flex flex-col items-start'>
          <h1 className=' font-poppins font-semibold text-white text-lg'>Useful Links</h1>
          <div className='space-y-3 flex flex-col pt-5 font-poppins text-gray-300'>
            <Link to='/content'>Content</Link>
            <Link to='/howitworks'>How It Works</Link>
            <Link to='/create'>Create</Link>
            <Link to='/explore'>Explore</Link>
            <Link to='/terms'>Terms & Condition</Link>
          </div>
        </div>


        <div className='bg-red- flex flex-col items-start'>
          <h1 className=' font-poppins font-semibold text-white text-lg'>Community</h1>
          <div className='space-y-3 flex flex-col pt-5 font-poppins text-gray-300'>
            <Link to='/content'>Help Center</Link>
            <Link to='/howitworks'>Partners</Link>
            <Link to='/create'>Suggetions</Link>
            <Link to='/explore'>Blog</Link>
            <Link to='/terms'>Newsletters</Link>
          </div>
        </div>


        <div className='bg-red- flex flex-col items-start'>
          <h1 className=' font-poppins font-semibold text-white text-lg'>Partner</h1>
          <div className='space-y-3 flex flex-col pt-5 font-poppins text-gray-300'>
            <Link to='/content'>Our Partner</Link>
            <Link to='/howitworks'>Become a Partner</Link>
          </div>
        </div>



      </section>
      <div className='px-36'>
        <hr className='border-2 h-[1px] border-gray-400' />
      </div>
      <div className='text-white px-36 flex justify-between pt-6 pb-7 font-poppins'>
        <div> Copyright <span>&#169;</span> 2022 Hookbank. All Right Reserved.</div>
        <div className='flex space-x-7'>
          <img className='h-5' src={instagram} alt="" />
          <img className='h-5' src={facebook} alt="" />
          <img className='h-5' src={twitter} alt="" />
          <img className='h-5' src={linkedin} alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer