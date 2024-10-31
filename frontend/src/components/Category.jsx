import React from 'react'
// import HomeNav from '../pages/HomeNav'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Subfooter from './Subfooter';
// import Navfooter from './Navfooter'
import { useTranslation } from 'react-i18next';




const Category = () => {

    const { t } = useTranslation();

  return (
    <>

        <div className=' pb-24'>
            <div>
              <div className='mt-3'>
                <FaSearch className='absolute ml-2 mt-2 lg:hidden' />
                <input type="search"  className='rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4] lg:hidden' placeholder='search..' />
                <h1 className='font-bold text-xl lg:text-4xl mt-2 ml-3'>{t('ExploreDifferentGenres')}</h1>
              </div>

              <div className=' ml-3 pt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>
                <div>
                    <Link to={"/Genres/Action"} className='w-56 h-56 bg-red-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>{t('Action')}</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Adventure"} className='w-56 h-56 bg-orange-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>{t('Adventure')}</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Childrens"} className='w-56 h-56 bg-lime-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Children's Stories</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Comedy"} className='w-56 h-56 bg-yellow-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Comedy</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Drama"} className='w-56 h-56 bg-blue-900 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Drama</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Fantasy"} className='w-56 h-56 bg-green-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Fantasy</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Fairy"} className='w-56 h-56 bg-cyan-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Fairy Tale</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Historical"} className='w-56 h-56 bg-amber-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Historical Fiction</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Horror"} className='w-56 h-56 bg-black block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Horror</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Life"} className='w-56 h-56 bg-violet-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Life</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Magical"} className='w-56 h-56 bg-fuchsia-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Magical </h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Mystery"} className='w-56 h-56 bg-zinc-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Mystery</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Mythology"} className='w-56 h-56 bg-lime-950 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Mythology</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Novel"} className='w-56 h-56 bg-stone-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Novel</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Romance"} className='w-56 h-56 bg-rose-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Romance</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Sciencefiction"} className='w-56 h-56 bg-lime-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Science Fiction</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Shortstory"} className='w-56 h-56 bg-yellow-950 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Short Story</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Supernatural"} className='w-56 h-56 bg-purple-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Super Natural</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Suspense"} className='w-56 h-56 bg-yellow-500 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Suspense</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Thriller"} className='w-56 h-56 bg-neutral-500 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Thriller</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Timetravel"} className='w-56 h-56 bg-amber-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Time Travel</h2>    
                        </div> 
                    </Link>
                </div>

              </div>
            </div>
        </div>
        <Subfooter />
    </>
  )
}

export default Category