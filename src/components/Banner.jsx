import React from 'react'
import bannerImg from '../assets/content-image-1.png'
import wave from '../assets/wave.svg'

function Banner() {
  return (
      <section className="relative justify-around w-full flex bg-[#edf5f8]">
          <main className="flex flex-col justify-center p-10 w-full md:w-[50%]">
              <h5 className="text-lg font-semibold text-[#4a3daf] border-b-2 tracking-wider border-pink-500 mb-10 w-max">IT Support Management</h5>
              <p className=" text-2xl md:text-4xl font-light leading-[3rem] tracking-wide">Our IT <span className='px-2 text-3xl md:text-5xl font-bold'>Service Management</span> offers a wide range of support services for various platforms and technologies.</p>

          </main>
          <figure className="md:block hidden -ml-28">
              <img className="max-w-[50rem]"  src={bannerImg} alt="banner"/>
          </figure>
          <img className='absolute bottom-0 w-full  h-[1rem] md:h-[10rem] object-cover' src={wave} alt="wave"/>
    </section>
  )
}

export default Banner