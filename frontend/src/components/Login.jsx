import {React, useState} from 'react'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import MyMessage from './Message'

const Login = () => {
    const {handleSubmit, control} = useForm()

    const navigate = useNavigate()
    const [showMessage, setShowMessage] = useState(false)

    const submission = (data) => {
        AxiosInstance.post("login/", {
            email: data.email,
            password: data.password
        })
        .then((response) => {
            console.log(response)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.username)
            localStorage.setItem("profile_image", response.data.profile_image)
            navigate("/home")
        })
        .catch((error) => {
            setShowMessage(true)
            console.log('error during login',error)
        })
    }

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-black'>
        {showMessage ? <MyMessage text="Login has failed, please try again, invalid email or password" color={"red"} /> : null}
        <form onSubmit={handleSubmit(submission)} className='px-4 w-[250px] sm:w-auto'>

            <Box className='bg-white p-2 sm:p-5 min-w-[200px] sm:min-w-[300px] h-[400px] sm:h-[80%] lg:h-[77%] xl:h-[70%] w-auto border border-gray-500 rounded-xl'>
                <Box className='flex justify-center items-center w-full h-[70px] sm:h-[82px]'>
                    <Box className=' text-xl sm:text-3xl'>Login</Box>
                </Box>

                <Box className='flex justify-center items-center w-full h-[70px] sm:h-[82px]'>
                    <MyTextField
                    name={"email"} 
                    control={control}
                    label="Email"
                    />
                </Box>

                <Box className='flex justify-center items-center w-full h-[70px] sm:h-[82px]'>
                    <MyPassField 
                    name={"password"} 
                    control={control}
                    label="Password"
                    />
                </Box>

                <Box className='flex justify-center items-center w-full h-[70px] sm:h-[82px]'>
                    <MyButton 
                    type={"submit"}
                    label="Login" 
                    />
                </Box>

                <Box className='flex justify-center items-center w-full h-[70px] sm:h-[82px]' sx={{flexDirection: "column"}}>
                    <Link to="/register" className='text-[#3d89fa] hover:text-[blue] text-sm sm:text-base'>
                        don't have an account? register here
                    </Link>
                    <Link to="/request/password_reset" className='text-[#3d89fa] hover:text-[blue] text-sm sm:text-base'>
                        Password Forgotten ? click here
                    </Link>
                </Box>
            </Box>

        </form>
    </div>
  )
}

export default Login