import { React, useEffect, useMemo, useState } from 'react'
import AxiosInstance from './AxiosInstance'
import { Box } from '@mui/material'
import { FaSearch, FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import noimg from '../assets/images/noimg.jpg'
import { MdLibraryBooks } from "react-icons/md";
import Subfooter from './Subfooter';
import { useTranslation } from 'react-i18next';


const Home = ({language}) => {

  const [myData, setMyData] = useState([])
  const [loading, setLoading] = useState(true)
  // const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  // const GetData = () => {
  //   AxiosInstance.get("users/").then((res) => {
  //     setMyData(res.data)
  //     console.log(res.data)
  //     setLoading(false)
  //   })
  // }

  const GetData = () => {
    AxiosInstance.get("create_story/")
      .then((res) => {
        const filteredData = res.data.filter(story => story.language === language);
        setMyData(filteredData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    GetData()
  }, [language])

  return (
    <div>
      {/* { loading ? <p>Loading...</p> :
      <div>
        {myData.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', p: 2, m: 2, boxShadow: 3 }}>
            <div className=' text-red-500'>
              {item.username}
            </div>
          </Box>
        ))}
      </div>
      } */}

        <section className='pb-16'>
          <div>
              <div className='mt-3'>
                <button>
                  <FaSearch className='absolute ml-2 -mt-3 lg:hidden ' />
                </button>
                <input type="search"  className=' lg:hidden rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4]' placeholder='search..' />
                <h1 className='font-bold text-2xl mt-2 ml-3 lg:text-4xl'>{t('ReadStories')}</h1>
              </div>
              <div>
                <div className='mt-3 w-full flex font-bold bg-[#f0efef] lg:bg-transparent'>
                  <h1 className='ml-3 lg:text-xl'>{t('TopTrendingStories')}</h1>
                  <IoIosArrowForward className='mt-[6px] right-0 absolute lg:text-xl' />
                </div>

                <div className='flex gap-4 overflow-x-auto scrollbar-hide mt-0 ml-3 mr-3'>
                {myData.map((story) => (
                  <div key={story.id}>
                    <a href={`/Bookdetails/${story.id}`} className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> {story.rating || '5.0'}
                      </div>
                      <img src={story.background_image || noimg} alt="" className='max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> {story.no_of_pages} {t('Parts')}
                      </div>
                      <div className='-mt-6'>
                        {story.book_name}
                      </div>
                      <p className='text-zinc-600 -mt-2'>{story.genres}</p>
                      <p className='text-zinc-600 -mt-2'>45k+ {t('Readers')}</p>
                    </a>
                  </div>
                ))}
              </div>

                <div className='mt-3 w-full flex font-bold bg-[#f0efef] lg:bg-transparent'>
                  <h1 className='ml-3 lg:text-xl'>{t('NewStories')}</h1>
                  <IoIosArrowForward className='mt-[6px] right-0 absolute lg:text-xl' />
                </div>

                <div className='flex gap-4 overflow-x-auto scrollbar-hide mt-0 ml-3 mr-3 pb-10'>
                  {myData.map((story) => (
                    <div key={story.id}>
                      <a href={`/Bookdetails/${story.id}`} className=''>
                        <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                          <FaStar /> {story.rating || '5.0'}
                        </div>
                        <img src={story.background_image || noimg} alt="" className='max-w-[150px] w-[150px]' />
                        <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                          <MdLibraryBooks /> {story.no_of_pages} {t('Parts')}
                        </div>
                        <div className='-mt-6'>
                          {story.book_name}
                        </div>
                        <p className='text-zinc-600 -mt-2'>{story.genres}</p>
                        <p className='text-zinc-600 -mt-2'>45k+ {t('Readers')}</p>
                      </a>
                    </div>
                  ))}
                </div>

              </div>
          </div>
      </section>
      <Subfooter />

    </div>
  )
}

export default Home