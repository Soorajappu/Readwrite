import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import bg4 from '../../assets/images/bg4.jpg'

const Saved = () => {
  return (
    <div>
      <div>
        <div className='mt-3 w-full flex font-bold bg-[#f0efef] lg:bg-stone-200'>
          <h1 className='ml-3 lg:text-xl'>Continue Writing...</h1>
          <IoIosArrowForward className='mt-[6px] right-0 absolute lg:text-xl' />
        </div>

        <div className='flex gap-4 overflow-x-auto scrollbar-hide mt-4 ml-3 mr-3'>
          <div>
            <a href="/PageWriting" className=''>
              <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
              <div className=''>
                Book Name
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Saved