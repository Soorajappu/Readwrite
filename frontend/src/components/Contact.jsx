import React from 'react'

const Contact = () => {
  return (
    <>
        <div className=' bg-black p-4 pb-28' id='contact'>
            <div className=' bg-gradient-to-tr from-yellow-300 to-orange-500 p-4 md:w-96 md:m-auto lg:m-auto m-auto max-w-80 rounded-lg'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Contact us</h1>
                </div>
                <div>
                    <form action="#">
                        <p>Name</p>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <input type="text" name="user" placeholder="User Name" class="username" className='w-full rounded-lg p-1 text-sm' />
                        </div>  

                        <p>Email</p>
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" name="email" placeholder="Email" class="email" className='w-full rounded-lg p-1 text-sm' />
                        </div>

                        <p>Type your message</p>
                        <div>
                            <textarea className='w-full h-28 rounded-lg p-1 text-sm' required="required" placeholder='Messages'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact