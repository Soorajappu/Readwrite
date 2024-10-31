// import React from 'react'
import bookimages from '../assets/images/bookimages.jpg'
import touch from '../assets/images/touch.jpg'
import write from '../assets/images/write.jpg'
import React, { useState, useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Index = () => {

  const [nav, setNav] = useState(false)
    const handileClick = () => setNav(!nav)

    const [visible, setvisible] = useState(false)

    let menuRef = useRef(null);

    useEffect(() => {
        let handler = (e) =>{
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setvisible(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    },[]);

  return (
    <>
      <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#404142] text-yellow-400'>
          <div className='text-3xl font-bold'>
            sitename
          </div>
          <div className='flex'>
            <ul className='hidden md:flex border border-none border-yellow-400 rounded-md block:flex justify-between w-[280px]'>
              <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                  <ScrollLink  to="index" href='index' >
                      Home
                  </ScrollLink>
              </li>

              <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                    <ScrollLink  to="about" href='about' >
                        About
                    </ScrollLink>              
              </li>

              <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                    <ScrollLink  to="contact" href='contact' >
                        Contact
                    </ScrollLink>
              </li>

              <li className='border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full mr-4 cursor-pointer p-2'>
                    <RouterLink to="/login" onClick={() => setvisible(true)}  >
                        Login
                    </RouterLink>
              </li>

            </ul>

            {/* Hamburger */}
            <div onClick={handileClick} className='md:hidden z-10 cursor-pointer'>
                { !nav ? <FaBars /> : <FaTimes /> }
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#404142] flex flex-col justify-center items-center'}>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6'>
                    <ScrollLink onClick={handileClick} to="index" >
                        Home
                    </ScrollLink>
                </li>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6 mt-2'>
                    <ScrollLink onClick={handileClick} to="about" >
                        About
                    </ScrollLink>
                </li>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6 mt-2'>
                    <ScrollLink onClick={handileClick} to="contact" >
                        Contact
                    </ScrollLink>
                </li>
                <li className='py-2 text-2xl cursor-pointer border border-none text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full pl-6 pr-6 mt-2'>
                    <RouterLink onClick={() => {setvisible(true); handileClick(false)}} to="/login" >
                        Login
                    </RouterLink>
                </li>
                
            </ul>
          </div>
        </div>

        <div className='bg-black items-center pb-0 'id='index'>
        <div className='pt-20'>
          <div className='mt-3 text-center text-yellow-400 text-sm'>
            <h1 className='sm:text-2xl md:text-4xl'>WELLCOME TO READING TIME</h1>
            <p className='text-xs sm:text-xm text-slate-300 md:text-sm'>A word is a small magic, a spell that can unlock the world.</p>
          </div>
        </div>
        <div className='text-white text-center pt-9 pb-12'>
          <div className=' block w-[80%] max-w-7xl my-20 ml-auto sm:mr-12 lg:w-11/12'>

            <div className='max-w-60 mr-10 mb-10 inline-block align-top bg-zinc-900 box-border h-60 lg:h-72'>
              <img className='inline-block w-20 mt-4 lg:w-32' src={bookimages} alt="" />
              <h3 className='text-yellow-500 p-2'>Read</h3>
              <p className='mt-8 p-3 text-xs lg:text-sm lg:mt-6'>You can read many story's hear.This story's are write our own.Hear you read short story,stories,etc</p>
            </div>

            <div className='max-w-60 mr-10 mb-10 inline-block align-top bg-zinc-900 box-border h-60 lg:h-72'>
              <img className='inline-block w-20 h-16 mt-4 lg:w-32 lg:h-20' src={write} alt="" />
              <h3 className='text-yellow-500 p-2'>Write</h3>
              <p className='mt-10 p-4 text-xs lg:text-sm lg:mt-6'>You can also write your stories.You can share your own stories.</p>
            </div> 

            <div className='max-w-60 mr-10 inline-block align-top bg-zinc-900 box-border h-60 lg:h-72'>
              <img className='inline-block w-20 mt-4 lg:w-32' src={touch} alt="" />
              <h3 className='text-yellow-500 p-2'>Be in Touch</h3>
              <p className='mt-8 p-3 text-xs lg:text-sm lg:mt-6'>You can also communicate with others.You can chat and you can comment the others stories.</p>
            </div> 

          </div>
        </div>
        <About />
        <Contact />
        <Footer />
      </div>
    
    </>
  )
}

export default Index