import React from 'react'

const About = () => {
  return (
    <>
      <div className='bg-black items-center p-8 pb-48 md:pt-36' id='about'>
        <div className='bg-zinc-900 p-4 md:p-10 md:w-96 md:m-auto lg:m-auto mt-24 m-auto max-w-80'>
          <div className='text-center'>
              <h1 className=' text-3xl font-bold text-yellow-500'>About Us</h1>
          </div>
          <div>
              <p className='text-sm text-slate-300'>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                  College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                  and going through the cites of the word in classical literature, discovered the undoubtable source.
                  This book is a treatise on the theory of ethics, very popular during the Renaissance. 
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About