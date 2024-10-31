import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import bg4 from '../../assets/images/bg4.jpg'
import { MdLibraryBooks } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const Published = () => {
  return (
    <div>
        <div>
            <div className='mt-3 w-full flex font-bold bg-[#f0efef] lg:bg-stone-200'>
            <h1 className='ml-3 lg:text-xl'>Edit Published Stories</h1>
            <IoIosArrowForward className='mt-[6px] right-0 absolute lg:text-xl' />
            </div>

            <div className='flex gap-4 overflow-x-auto scrollbar-hide ml-3 mr-3'>
                <div>
                    <a href="/Bookdetails" className=''>
                        <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                        </div>
                        <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                        <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 67 Parts
                        </div>
                        <div className='-mt-6'>
                        Book Name
                        </div>
                        <p className='text-zinc-600 -mt-2'>Genres</p>
                        <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Published