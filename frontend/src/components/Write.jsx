import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import draft from '../assets/images/draft.png'
import completed from '../assets/images/completed.png'
import Subfooter from './Subfooter';



const Write = () => {
  return (
    <>    
        <div className='pt-16 pb-24'>
          <div>
            <div className='mt-3'>
              <FaSearch className='absolute ml-2 mt-2 lg:hidden' />
              <input type="search"  className='rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4] lg:hidden' placeholder='search..' />
              <h1 className='font-bold text-xl lg:text-3xl mt-2 ml-3 justify-center flex'>Write Your Stories</h1>
              <div className='flex justify-center mt-4'>
                <Link to={'/writingpad'} className='rounded-full bg-orange-600 p-1 pl-4 pr-4 text-white'>Create Stories</Link>
              </div>
            </div>
            
            <div>
              <div>
                <div className='bg-zinc-200 p-8 ml-4 mr-4 mt-5 rounded-md shadow-lg justify-center flex'>
                    <Link to={'/writingpad'} className='w-32 h-32 bg-slate-300 block relative bg-cover rounded-xl'>
                      <div className='flex justify-center pt-8 text-5xl text-gray-400'>
                        <FaPlus className=' bg-slate-200 rounded-md' />
                      </div>
                      <div className='w-full bottom-0 absolute pt-2 px-2 pb-2 justify-center flex'>
                          <h2>NEW STORY</h2>    
                      </div> 
                    </Link>
                </div>
                <div className='bg-zinc-200 p-8 ml-4 mr-4 mt-5 rounded-md shadow-lg justify-center flex'>
                    <Link to={'/Drafts'} className='w-32 h-32 bg-slate-300 block relative bg-cover rounded-xl'>
                      <div className='flex justify-center pt-8 text-gray-400'>
                        <img src={draft} alt="" className='w-[50px]' />
                      </div>
                      <div className='w-full bottom-0 absolute pt-2 px-2 pb-2 justify-center flex'>
                          <h2>DRAFTS</h2>    
                      </div> 
                    </Link>
                </div>
                <div className='bg-zinc-200 p-8 ml-4 mr-4 mt-5 rounded-md shadow-lg justify-center flex'>
                    <Link className='w-32 h-32 bg-slate-300 block relative bg-cover rounded-xl'>
                      <div className='flex justify-center pt-8 text-gray-400'>
                      <img src={completed} alt="" className='w-[50px]' />
                      </div>
                      <div className='w-full bottom-0 absolute pt-2 px-2 pb-2 justify-center flex'>
                          <h2>COMPLETED</h2>    
                      </div> 
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Subfooter />     
    </>
  )
}

export default Write