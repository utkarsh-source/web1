import React from 'react';
import about1 from '../assets/about-image-1.jpg';
import about2 from '../assets/about-image-2.jpg';
import about3 from '../assets/about-image-3.jpg';
import about4 from '../assets/about-image-4.jpg';

function AboutUs() {
  return (
      <section id="about us" className="p-8 px-2 mt-20 flex md:flex-row flex-col justify-center">
          <article className="order-2 md:order-1 mt-14 md:mt-3 w-full md:w-[30%]">
            <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-2 border-[0.15rem] rounded-full text-xl font-bold tracking-wider border-pink-500 mb-10">About Us</h2>
            <p className=" text-justify text-lg">
                Our mission at aceintegrator is to connect you with end-to-end solutions that unlock real value, making your business more innovative and efficient than ever before.
                As experts in Enterprise Digital Services, Enterprise Applications, and Engineering, our sole purpose is to drive innovation in an increasingly competitive climate. Our global team combines technical knowledge, breakthrough analytics, and a genuine understanding of today’s consumers to empower you to stay ahead of the game.
            </p>
          </article> 
          <figure className="order-1 md:order-2 md:ml-28 place-items-center relative w-full md:w-[35%] grid grid-rows-2 grid-cols-2 gap-3">
              <img className="w-full" src={about1} alt="about-image-1" />
              <img className="w-full" src={about2} alt="about-image-2" />
              <img className="w-full" src={about3} alt="about-image-3" />
              <img className="w-full" src={about4} alt="about-image-4" />
              <span className="z-20 w-[5rem] h-[5rem] absolute rounded-full bg-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></span>
          </figure>
    </section>
  )
}   

export default AboutUs