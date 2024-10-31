import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <>
        <footer className='bg-zinc-900'>
            <div>
                <div className='flex justify-center'>
                    <ul className='flex justify-center gap-4 m-2'>
                        <li><a className='text-yellow-500' href="#">Home</a></li>
                        <li><a className='text-yellow-500' href="#">About</a></li>
                        <li><a className='text-yellow-500' href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='flex justify-center text-white gap-4 m-3'>
                    <a className='hover:text-yellow-500 text-xl' href="#"><FaFacebook /></a>
                    <a className='hover:text-yellow-500 text-xl' href="#"><FaInstagram /></a>
                    <a className='hover:text-yellow-500 text-xl' href="#"><FaTwitter /></a>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className='m-1 p-2 text-yellow-500'>Designed By <span>SKG</span> @ 2024</p>
            </div>
        </footer>
    </>
  )
}

export default Footer