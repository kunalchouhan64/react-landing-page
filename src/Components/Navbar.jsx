import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'


const Navbar = () => {
    return (
        <>
            <nav className='w-full flex py-6 justify-between items-center navbar px-10'>

                <img className='w-[124px]' src={logo} alt="" />

                <ul className='space-x-14 list-none sm:flex hidden px-10'>
                    <Link className='text-white' to='/'>Home</Link>
                    <Link className='text-white' to='/about'>About</Link>
                    <Link className='text-white' to='features'>Features</Link>
                    <Link className='text-white' to='solution'>Solution</Link>

                </ul>
            </nav>
        </>
    )
}

export default Navbar