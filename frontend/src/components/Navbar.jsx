import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import AxiosInstance from './AxiosInstance';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import Profileimg from '../assets/images/profile.png'
import { IoIosNotifications,IoMdHome } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaPencilAlt, FaSearch } from "react-icons/fa";
import { IoCompassOutline, IoLibrary  } from "react-icons/io5";
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ProtectedRoutes from './ProtectedRoutes';
import Profile from './Profile';
import Home from './Home';
import Settings from './Settings';
import Category from './Category';
import Library from './Library';
import Write from './Write';
import Writingpad from './Writingpad';
import Action from './genres/Action';
import Adventure from './genres/Adventure';
import Childrens from './genres/Childrens';
import Comedy from './genres/Comedy';
import Drama from './genres/Drama'; 
import Horror from './genres/Horror';
import Mystery from './genres/Mystery';
import Romance from './genres/Romance';
import Suspense from './genres/Suspense';
import Thriller from './genres/Thriller';
import Fairy from './genres/Fairy';
import Fantasy from './genres/Fantasy';
import Historical from './genres/Historical';
import Life from './genres/Life';
import Magical from './genres/Magical';
import Mythology from './genres/Mythology';
import Novel from './genres/Novel';
import Sciencefiction from './genres/Sciencefiction';
import Shortstory from './genres/Shortstory';
import Supernatural from './genres/Supernatural';
import Timetravel from './genres/Timetravel';
import Bookdetails from './Bookdetails';
import Drafts from './Drafts';
import PageWriting from './PageWriting';
import Notification from './Notification';


export default function Navbar() {

    const { t, i18n } = useTranslation();
    const location = useLocation();
    const path = location.pathname
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [profileImage, setProfileImage] = useState(Profileimg);
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
            fetchUserProfileImage(storedUsername); // Fetch profile image when username is set
        }
    }, []);

    const fetchUserProfileImage = async (username) => {
        try {
            const response = await AxiosInstance.get('profile_image/');
            console.log(response.data);
             // Extract profile image URLs from the response
             const user = response.data.find(user => user.username===username);
             const profileImages = user?.profile_image;
            if (profileImages) {
                console.log();
                setProfileImage(profileImages);
            }
        } catch (error) {
            console.error("Failed to fetch profile image", error);
        }
    };
    

    const logoutUser = () => {
      AxiosInstance.post("logoutall/")
      .then(() => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("profile_image")
        navigate("/")
      })
    }

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        if (language !== selectedLanguage) {
            setLanguage(selectedLanguage);
            localStorage.setItem('language', selectedLanguage);
            i18n.changeLanguage(selectedLanguage);
        }
    };

  return (

    <>
         <div className='absolute w-full h-[70px] flex justify-between items-center pl-3 pr-4 bg-[#404142] text-yellow-400'>
            <div className='flex gap-2'>
                <img className='w-8 rounded-full' src={Logo} alt="" />
                <a className='font-bold text-xl hidden sm:block' href="#home">{t('Sitename')}</a>
            </div>
            <div className='flex items-center justify-center gap-2 lg:w-[500px] mt-4 lg:-mt-2'>
                <button>
                    <FaSearch className='hidden lg:absolute lg:ml-4 lg:-mt-2 lg:block ' />
                </button>
                <input type="search"  className='hidden lg:block rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4]' placeholder='search..' />
                <Link to={"/Notification"}>
                    <button className='ml-1 z-10 relative flex cursor-pointer bg-[#696969] p-1 rounded-full -mt-5 lg:mt-0'>
                        <IoIosNotifications className=' text-2xl' />
                        <GoDotFill className='hidden absolute top-4 ml-2 h-4 text-lg text-red-600' />
                    </button>
                </Link>
                <button className=' lg:mt-4 z-[1]'>
                    <Link to={"/Profile"} >
                        <div className='text-xs'>
                            <img className='w-[35px] bg-white rounded-full' src={ profileImage || Profileimg} alt="" />
                            <span>{username}</span>                 
                        </div>
                    </Link>  
                </button>
            </div>
            <div className='flex items-center cursor-pointer z-[1]'>
                <select value={language} onChange={handleLanguageChange} className='bg-[#696969] text-yellow-400 rounded p-1'>
                    <option value="en">{t('English')}</option>
                    <option value="ml">{t('മലയാളം')}</option>
                </select>
            </div>
            <div className='fixed top-4 bottom-0 left-0 right-0 text-sm justify-center items-center bg-[#404142] h-16 z-[1] lg:relative lg:h-14 lg:bg-transparent lg:text-base hidden lg:block'>
                <ul className='flex gap-6 items-center'>
                    <li>
                        <Link to={'/Home'}>
                            <IoMdHome className='ml-3 text-white' />
                            {t('Home')}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Category'} className='cursor-pointer'>
                            <IoCompassOutline className='ml-6 text-white' />
                            {t('Category')}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Write'}>
                            <FaPencilAlt className='ml-3 text-white' />
                            {t('Write')}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Library'}>
                            <IoLibrary className='ml-4 text-white' />
                            {t('Library')}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='fixed flex bottom-0 lg:hidden text-sm bg-[#404142] h-16 text-yellow-400 z-10 inset-x-0'>
                <ul className='flex flex-row justify-between items-center mr-auto ml-auto pr-2 pl-2 w-full'>
                    <li className='cursor-pointer flex flex-col items-center'>
                        <Link to={'/Home'}>
                            <IoMdHome className='ml-3 text-white' />
                            {t('Home')}
                        </Link>
                    </li>
                    <li className='cursor-pointer flex flex-col items-center'>
                        <Link to={'/Category'} className='cursor-pointer'>
                            <IoCompassOutline className='ml-6 text-white' />
                            {t('Category')}
                        </Link>
                    </li>
                    <li className='cursor-pointer flex flex-col items-center'>
                        <Link to={'/Write'}>
                            <FaPencilAlt className='ml-3 text-white' />
                            {t('Write')}
                        </Link>
                    </li>
                    <li className='cursor-pointer flex flex-col items-center'>
                        <Link to={'/Library'}>
                            <IoLibrary className='ml-4 text-white' />
                            {t('Library')}
                        </Link>
                    </li>
                </ul>
            </div>

            {/* <div className='flex items-center cursor-pointer z-[1]'>
                <select value={language} onChange={handleLanguageChange} className='bg-[#696969] text-yellow-400 rounded p-1'>
                    <option value="en">{t('English')}</option>
                    <option value="ml">{t('മലയാളം')}</option>
                </select>
            </div> */}

        </div>

        <Box component="main" >
            <Toolbar />
            <Routes>
                <Route element={<ProtectedRoutes />}>

                    <Route path="/Home" element={<Home language={language} />} />
                    <Route path="/Profile" element={<Profile username={username} />} />
                    <Route path="/Settings" element={<Settings logoutUser={logoutUser} />} />
                    <Route path='/Category' element={<Category />} />
                    <Route path='/Library' element={<Library />} />
                    <Route path='/Write' element={<Write />} />
                    <Route path='/Writingpad' element={<Writingpad username={username} />} />
                    <Route path='/Genres/Action' element={<Action />} />
                    <Route path='/Genres/Adventure' element={<Adventure />} />
                    <Route path='/Genres/Childrens' element={<Childrens />} />
                    <Route path='/Genres/Comedy' element={<Comedy />} />
                    <Route path='/Genres/Drama' element={<Drama />} />
                    <Route path='/Genres/Fairy' element={<Fairy />} />
                    <Route path='/Genres/Fantasy' element={<Fantasy />} />
                    <Route path='/Genres/Historical' element={<Historical />} />
                    <Route path='/Genres/Horror' element={<Horror />} />
                    <Route path='/Genres/Life' element={<Life />} />
                    <Route path='/Genres/Magical' element={<Magical />} />
                    <Route path='/Genres/Mystery' element={<Mystery />} />
                    <Route path='/Genres/Mythology' element={<Mythology />} />
                    <Route path='/Genres/Novel' element={<Novel />} />
                    <Route path='/Genres/Romance' element={<Romance />} />
                    <Route path='/Genres/Sciencefiction' element={<Sciencefiction />} />
                    <Route path='/Genres/Shortstory' element={<Shortstory />} />
                    <Route path='/Genres/Supernatural' element={<Supernatural />} />
                    <Route path='/Genres/Thriller' element={<Thriller />} />
                    <Route path='/Genres/Timetravel' element={<Timetravel />} />
                    <Route path='/Genres/Suspense' element={<Suspense />} />
                    <Route path='/Bookdetails/:id' element={<Bookdetails language={language} />} />
                    <Route path='/Drafts' element={<Drafts />} />
                    <Route path='/PageWriting' element={<PageWriting />} />
                    <Route path='/Notification' element={<Notification />} />
                </Route>
            </Routes>
        </Box>
        
    </>


  );
}