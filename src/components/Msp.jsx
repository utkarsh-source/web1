import React from 'react';
import about1 from '../assets/about-image-1.jpg';
import about2 from '../assets/about-image-2.jpg';
import about3 from '../assets/about-image-3.jpg';
import about4 from '../assets/about-image-4.jpg';
import { TiTickOutline } from 'react-icons/ti'


const listItem = [
    "Single point-of-contact and accountability for you, your suppliers, internal staff and consultants to manage the application of IT staffing and resources to meet your team’s needs.",
    "More effective rate structure to manage costs and recognize savings in average cost-per-consultant.",
    "Manage contract administration and execution.",
    "Invoice single supplier--Apex. We handle distribution of payment to vendor pool.",
    "Use existing partnerships to scrub the marketplace for vendors that can increase productivity and quality of the recruitment pipeline.",
    "Implement Key Performance Indicators (KPI’s) to track performance.",
]

function Msp() {
  return (
      <section id="msp" className="px-2 md:flex-row flex-col mt-20 flex justify-center">
          <article className="order-2 md:order-1 mt-16 md:mt-3 w-full md:w-[40%]">
            <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-2 border-[0.15rem] rounded-full text-xl font-bold tracking-wider border-pink-500 mb-10">MSP - Managed Service Provider</h2>
              <ul>
                  {listItem.map((text, index) => {
                      return (
                          <li key={index} className="flex mb-5">
                              <TiTickOutline className="shrink-0 text-xl text-pink-500 mr-3" />
                              {text}
                          </li>
                      )
                  })}
            </ul>
          </article> 
          <figure className="order-1 md:order-2 md:ml-28 place-items-center relative w-full md:w-[35%] grid grid-rows-2 grid-cols-2 gap-3">
              <img className="w-full" src={about1} alt="about-image-1" />
              <img className="w-full" src={about2} alt="about-image-2" />
              <img className="w-full" src={about3} alt="about-image-3" />
              <img className="w-full" src={about4} alt="about-image-4" />
              <span className="z-20 w-[5rem] h-[5rem] absolute rounded-full bg-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              </span>
          </figure>
    </section>
  )
}

export default Msp