import React, { useState, useEffect } from 'react'
// import ProfileNav from './ProfileNav'
import Noimg from '../assets/images/noimg.png'
import img from '../assets/images/profile.png'
import { IoSettings } from "react-icons/io5";
import { IoIosCamera } from "react-icons/io";
import Subfooter from './Subfooter'
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog'
import Avatar from 'react-avatar-edit'
import AxiosInstance from './AxiosInstance';




const Profile = ({username}) => {

  const [activeTab, setActiveTab] = useState('Library'); // Track active tab

  const [image, setImage] = useState("")
  const [imagecrop, setImageCrop] = useState(false)
  // const [src, setSrc] = useState(false)

  // const [profile, setProfile] = useState([])
  const [pview, setPview] = useState(false);

  // const profilefinal = profile.map((item) => item.pview);
  const [usernames, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setImage(base64String); // Set the Base64 string in state
      };
      reader.readAsDataURL(file);
      // setImage(file);
      setImageCrop(true);
    } else {
      setImage(null);
    }
  };


  
  const onClose = () => {
    setImageCrop(false);
    setPview(null);
  };

  const onCrop = (view) => {
    setPview(view);
  };

  const saveCropImage = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token or image not found!');
      return;
    }

    const formData = new FormData();
    formData.append('profile_image', pview || image);

    try {
      const response = await AxiosInstance.post('profile_image/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      if (response && response.data) {
        console.log('Image uploaded successfully:', response.data.profile_image);
        setProfileImage(response.data.profile_image);
      } else {
        console.error('Unexpected response structure:', response);
      }  
    } catch (error) {
      console.error('Error uploading the image:', error);
      // Handle error
    } finally {
      setImageCrop(false);
      setPview(null);
    }
  };
  

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        setUsername(storedUsername);
        fetchProfileImage(storedUsername); // Fetch profile image when username is set
    }
}, []);

  const fetchProfileImage = async (username) => {
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



  return (
    <>

        <section className=' mb-96' >
          <div className='mb-9'>
            <div>
                
                <div className='w-full h-48 bg-no-repeat sm:w-[460px] sm:m-auto md:m-auto md:w-[500px]' style={{ backgroundImage: `url(${Noimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                  <Link to={'/Settings'}>
                    <IoSettings className='ml-auto relative h-7 w-[35px] mt-[5px] mr-[5px] mb-[-34px] bg-zinc-300 cursor-pointer' />
                  </Link>
                  <IoIosCamera className='ml-auto relative w-7 h-7 mt-[168px] mr-1 mb-4 bg-zinc-300 cursor-pointer'/>
                </div>
                
            </div>
            <div>
                <img className='w-32 rounded-full m-auto relative mt-[-55px] bg-gray-500 p-1 cursor-pointer'
                  src={profileImage || img}
                  alt="" />
                <Dialog className=' bg-neutral-500'
                  visible={imagecrop}
                  header= {()=>{
                    <header>
                      <p className='text-2xl font-semibold'>
                        Update Profile
                      </p>
                    </header>
                  }}
                  onHide={() => setImageCrop(false)}
                  >
                    <div className=' confirmation-content flex flex-col items-center bg-neutral-500'>
                      <Avatar 
                      width={500}
                      height={400}
                      onCrop={onCrop}
                      onClose={onClose}
                      src={image}
                      shadingColor={"#474649"}
                      backgroundColor={"#474649"}
                      />
                      <div className='flex flex-col items-center -ml-12 mt-5 w-12'>
                        <div className='flex justify-around w-12 mt-4 mb-3 p-4'>
                          <button onClick={saveCropImage} className=' bg-orange-600 rounded-full text-white pl-4 pr-4'>SAVE</button>
                        </div>
                      </div>

                    </div>

                </Dialog>
                <IoIosCamera
                      className='w-10 rounded-full cursor-pointer relative m-auto h-7 bg-slate-300 -mt-[28px]'
                      onClick={(e) => {
                        // Prevent the default onClick behavior from executing
                        e.preventDefault();

                        // Trigger the click event of the hidden file input
                        document.getElementById('fileInput').click();
                        
                        // Optionally, you can keep the existing onClick behavior here
                        // setImageCrop(true);
                      }}
                    />

                    {/* Hidden file input */}
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />

                <h1 className='m-auto text-center mt-3'>{username}</h1>
            </div>
          </div>
          <div className='mx-3 my-0 relative'>
            <div className=' border-b pt-2 pb-3 px-0 text-left overflow-hidden w-full overflow-x-auto whitespace-nowrap'>
              <a className={`text-base pt-[5px] pb-3 px-[5px] cursor-pointer 
                ${activeTab === 'Library' ? 'text-red-700 border-red-700 border-b-2' : 'hover:text-red-700 hover:border-b-2 hover:border-white'}`}
              onClick={() => setActiveTab('Library')}>
                Library
              </a>

              <a className={`text-base pt-[5px] pb-3 px-[5px] cursor-pointer 
                ${activeTab === 'MyStories' ? 'text-red-700 border-red-700 border-b-2' : 'hover:text-red-700 hover:border-b-2 hover:border-white'}`}
              onClick={() => setActiveTab('MyStories')}>
                <span className='pr-2'>0</span>
                MyStories
              </a>

              <a className={`text-base pt-[5px] pb-3 px-[5px] cursor-pointer 
                ${activeTab === 'Followers' ? 'text-red-700 border-red-700 border-b-2' : 'hover:text-red-700 hover:border-b-2 hover:border-white'}`}
              onClick={() => setActiveTab('Followers')}>
                <span className='pr-2'>0</span>
                Followers
              </a>

              <a className={`text-base pt-[5px] pb-3 px-[5px] cursor-pointer 
                ${activeTab === 'Following' ? 'text-red-700 border-red-700 border-b-2' : 'hover:text-red-700 hover:border-b-2 hover:border-white'}`}
              onClick={() => setActiveTab('Following')}>
                <span className='pr-2'>0</span>
                Following
              </a>

            </div>
            <div></div>
          </div>
        </section>
        <Subfooter />
        
    </>
  )
}

export default Profile