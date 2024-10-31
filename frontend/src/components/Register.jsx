import React from 'react'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Register = () => {

    const navigate = useNavigate()

    const schema = yup
    .object({
        username: yup.string().required("Username is required"),
        email: yup.string().email("field must be an email").required("Email is required"),
        password: yup.string().required("Password is required")
                    .min(8, "Password must be at least 8 characters")
                    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                    .matches(/[0-9]/, "Password must contain at least one digit")
                    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Password must contain at least one special character"),
        password2: yup.string().required("Password confirmation is a required field")
                    .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
    
    
    const {handleSubmit, control} = useForm({resolver: yupResolver(schema)})
    const submission = (data) => {
        AxiosInstance.post("register/", {
            username: data.username,
            email: data.email,
            password: data.password
        })
            .then((response) => {
                console.log(response)
                navigate("/login")
            })
            .catch((error) => {
                console.log(error)
            })
    }

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-black'>
        <form onSubmit={handleSubmit(submission)} className='px-4 w-[250px] sm:w-auto'>
            <Box className='bg-white p-2 sm:p-5 min-w-[200px] sm:min-w-[300px] h-[80%] lg:h-[77%] xl:h-[70%] w-auto border border-gray-500 rounded-xl'>
                <Box className='flex justify-center items-center w-full sm:h-[55px] h-[48px]'>
                    <Box className='text-xl sm:text-2xl'>User Registration</Box>
                </Box>

                <Box className='flex justify-center items-center w-full sm:h-[65px] h-[48px]'>
                    <MyTextField 
                    control={control}
                    name={"username"}
                    label={"Username"}
                    />
                </Box>

                <Box className='flex justify-center items-center w-full sm:h-[65px] h-[48px]'>
                    <MyTextField 
                    control={control}
                    name={"email"}
                    label={"Email"}
                    />
                </Box>

                <Box className='flex justify-center items-center w-full sm:h-[65px] h-[48px]'>
                    <MyPassField 
                    control={control}
                    name={"password"}
                    label={"Password"}
                    />
                </Box>

                <Box className='flex justify-center items-center w-full sm:h-[65px] h-[48px]'>
                    <MyPassField 
                    control={control}
                    name={"password2"}
                    label={"Confirm Password"}
                    />
                </Box>

                <Box className='flex justify-center items-center w-full sm:h-[55px] h-[48px]'>
                    <MyButton 
                    type={"submit"}
                    label="Register"
                    />
                </Box>

                <Box className='flex justify-center items-center w-full sm:h-[45px] h-[48px]'>
                    <Link to="/login" className='text-[#3d89fa] hover:text-[blue] sm:text-base text-xs'>
                        Already registered? please login!
                    </Link>
                </Box>
            </Box>
        </form>
    </div>
  )
}

export default Register