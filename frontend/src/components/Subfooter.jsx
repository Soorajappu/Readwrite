import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom'



const Subfooter = () => {
  return (
    <>
        <div className='flex relative bottom-[64px] lg:bottom-0 left-0 right-0 justify-center items-center bg-black h-40'>
            <div className='-mt-4'>
                <div className='flex justify-center'>   
                    <Link className='text-yellow-500 flex justify-center items-center' to={'/Contact'}>Contact</Link>
                </div>
                <div className='flex justify-center text-white gap-4 m-3'>
                    <a className='hover:text-sky-600 text-xl' href="#"><FaFacebook /></a>
                    <a className='hover:text-fuchsia-600 text-xl' href="#"><FaInstagram /></a>
                    <a className='hover:text-cyan-500 text-xl' href="#"><FaTwitter /></a>
                </div>
            </div>
            <div className='flex justify-center absolute -mb-20'>
                <p className='m-1 p-2 text-yellow-500'>Designed By <span>SKG</span> @ 2024</p>
            </div>
        </div>
    </>
  )
}

export default Subfooter