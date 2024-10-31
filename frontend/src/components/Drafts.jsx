import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import bg4 from '../assets/images/bg4.jpg'
import Subfooter from './Subfooter'
import Saved from './drafts/Saved';
import Published from './drafts/Published';




const Drafts = () => {

  const [activeTab, setActiveTab] = useState('Saved');

  return (
    <div>
      <div>
        <div className='mt-3 w-full flex font-bold bg-[#f0efef] lg:bg-stone-200'>
          <h1 className='ml-3 lg:text-xl'>My Stories</h1>
          <IoIosArrowForward className='mt-[6px] right-0 absolute lg:text-xl' />
        </div>

        <div className='flex gap-4 overflow-x-auto scrollbar-hide mt-0 ml-3 mr-3'>
          <div>
            <a href="/Bookdetails" className=''>
              <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                <FaStar /> 5.0
              </div>
              <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
              <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                <MdLibraryBooks /> 47 Parts
              </div>
              <div className='-mt-6'>
                Book Name
              </div>
              <p className='text-zinc-600 -mt-2'>Genres</p>
              <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
            </a>
          </div>

          <div>
            <a href="/Bookdetails" className=''>
              <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                <FaStar /> 5.0
              </div>
              <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
              <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                <MdLibraryBooks /> 56 Parts
              </div>
              <div className='-mt-6'>
                Book Name
              </div>
              <p className='text-zinc-600 -mt-2'>Genres</p>
              <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
            </a>
          </div>

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

          <div>
            <a href="/Bookdetails" className=''>
              <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                <FaStar /> 5.0
              </div>
              <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
              <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                <MdLibraryBooks /> 40 Parts
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
      <div className='mb-10'>
        <div className='mx-3 my-0 relative mt-10'>
          <div className=' border-b pt-2 pb-3 px-0 text-left overflow-hidden w-full overflow-x-auto whitespace-nowrap'>
            <a 
              className={`hover:text-red-700 hover:border-red-700 text-base hover:border-b-2 border-solid pt-[5px] pb-3 px-[5px] cursor-pointer ${activeTab === 'Saved' ? 'text-red-700 border-b-2 border-red-700' : ''}`}
              onClick={() => setActiveTab('Saved')}
            >
            <span className='pr-2'>0</span>
              Saved
            </a>

            <a  
              className={`hover:text-red-700 hover:border-red-700 text-base hover:border-b-2 border-solid pt-[5px] pb-3 px-[5px] cursor-pointer ${activeTab === 'Published' ? 'text-red-700 border-b-2 border-red-700' : ''}`}
              onClick={() => setActiveTab('Published')}
            >
              <span className='pr-2'>0</span>
              Published
            </a>
          </div>
        </div>
        <div>
          {activeTab === 'Saved' && <Saved />}
          {activeTab === 'Published' && <Published />}
        </div>
      </div>
      <Subfooter />
    </div>
  )
}

export default Drafts