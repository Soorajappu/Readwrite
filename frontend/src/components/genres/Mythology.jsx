import React from 'react'
import { FaSearch, FaStar } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import bg4 from '../../assets/images/bg4.jpg'
import {IoIosEye} from 'react-icons/io'
import Subfooter from '../Subfooter';


const Mythology = () => {
  return (
    <>
        <div className='pt-16 pb-24'>
            <div>
                <div>
                    <FaSearch className='absolute ml-2 mt-2 lg:hidden ' />
                    <input type="search"  className='rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4] lg:hidden' placeholder='search..' />
                    <h1 className='font-bold text-xl mt-2 ml-3 lg:text-4xl'>Mythology Stories</h1>
                </div>
            
                <div className=' ml-3 pt-4 pr-2 py-8 gap-8 grid grid-cols-1 md:grid-cols-2'>
                    <div className='h-[257px] flex flex-row box-border'>
                        <div className='rounded-md overflow-hidden'>
                            <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400'>
                                <FaStar /> 5.0
                            </div>
                            <img src={bg4} alt="" className=' max-w-[150px] w-[150px] rounded-md overflow-hidden relative' />
                            <div className='flex w-36 items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                                <MdLibraryBooks /> 56 Parts
                            </div>
                        </div>
                        <div className='mt-6 ml-3 flex-1 flex overflow-hidden justify-between flex-col'>
                            <a href="#"><p className='font-bold mb-2 flex flex-row'>Book Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Author Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Genres</p></a>
                            <a href="#"><p className='text-zinc-600  text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur officia nulla adipisci ipsam</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 flex items-center'><IoIosEye className='mr-1'/>455 Readers</p></a>
                        </div>
                    </div>

                    <div className='h-[257px] flex flex-row box-border'>
                        <div className='rounded-md overflow-hidden'>
                            <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400'>
                                <FaStar /> 5.0
                            </div>
                            <img src={bg4} alt="" className=' max-w-[150px] w-[150px] rounded-md overflow-hidden relative' />
                            <div className='flex w-36 items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                                <MdLibraryBooks /> 56 Parts
                            </div>
                        </div>
                        <div className='mt-6 ml-3 flex-1 flex overflow-hidden justify-between flex-col'>
                            <a href="#"><p className='font-bold mb-2 flex flex-row'>Book Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Author Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Genres</p></a>
                            <a href="#"><p className='text-zinc-600  text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur officia nulla adipisci ipsam</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 flex items-center'><IoIosEye className='mr-1'/>455 Readers</p></a>
                        </div>
                    </div>

                    <div className='h-[257px] flex flex-row box-border'>
                        <div className='rounded-md overflow-hidden'>
                            <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400'>
                                <FaStar /> 5.0
                            </div>
                            <img src={bg4} alt="" className=' max-w-[150px] w-[150px] rounded-md overflow-hidden relative' />
                            <div className='flex w-36 items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                                <MdLibraryBooks /> 56 Parts
                            </div>
                        </div>
                        <div className='mt-6 ml-3 flex-1 flex overflow-hidden justify-between flex-col'>
                            <a href="#"><p className='font-bold mb-2 flex flex-row'>Book Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Author Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Genres</p></a>
                            <a href="#"><p className='text-zinc-600  text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur officia nulla adipisci ipsam</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 flex items-center'><IoIosEye className='mr-1'/>455 Readers</p></a>
                        </div>
                    </div>

                    <div className='h-[257px] flex flex-row box-border'>
                        <div className='rounded-md overflow-hidden'>
                            <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400'>
                                <FaStar /> 5.0
                            </div>
                            <img src={bg4} alt="" className=' max-w-[150px] w-[150px] rounded-md overflow-hidden relative' />
                            <div className='flex w-36 items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                                <MdLibraryBooks /> 56 Parts
                            </div>
                        </div>
                        <div className='mt-6 ml-3 flex-1 flex overflow-hidden justify-between flex-col'>
                            <a href="#"><p className='font-bold mb-2 flex flex-row'>Book Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Author Name</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 mb-2'>Genres</p></a>
                            <a href="#"><p className='text-zinc-600  text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur officia nulla adipisci ipsam</p></a>
                            <a href="#"><p className='text-zinc-600 -mt-2 flex items-center'><IoIosEye className='mr-1'/>455 Readers</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subfooter />
    </>
  )
}

export default Mythology