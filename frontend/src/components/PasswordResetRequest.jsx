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

const PasswordResetRequest = () => {

    const {handleSubmit, control} = useForm()
    const navigate = useNavigate()

    const [showMessage, setShowMessage] = useState(false)

    const submission = (data) => {
        AxiosInstance.post("api/password_reset/", {
            email: data.email
        })
            .then((response) => {
                setShowMessage(true)
            })
            
    }

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-black'>
        {showMessage ? <MyMessage text="Password reset link is sent to your email" color={"#3ca60e"} /> : null}
        <form onSubmit={handleSubmit(submission)}>

            <Box className='bg-white p-5 min-w-[300px] h-[80%] lg:h-[77%] xl:h-[70%] w-[30%] border border-gray-500'>
                <Box className='flex justify-center items-center w-full h-[82px]'>
                    <Box className=' text-3xl'>Request Password Reset</Box>
                </Box>

                <Box className='flex justify-center items-center w-full h-[82px]'>
                    <MyTextField
                    name={"email"} 
                    control={control}
                    label="Email"
                    />
                </Box>


                <Box className='flex justify-center items-center w-full h-[82px]'>
                    <MyButton 
                    type={"submit"}
                    label={"Request Password Reset" }
                    />
                </Box>

                <Box className='flex justify-center items-center w-full h-[82px]' sx={{flexDirection: "column"}}>
                    
                </Box>
            </Box>

        </form>
    </div>
  )
}

export default PasswordResetRequest