import React, { useEffect, useRef, useState } from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import theme from '../assets/theme-icon-2.png'
import { BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonGroup from './ButtonGroup'


const settings = {
         dots: false,
         speed: 400,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
        easing: "ease-out",
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        draggable: true,
    accessibility: true,
         responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1}
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1}
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3}
        }    
      ]
    };


function Services() {

   

    const sliderRef = useRef()

    
    const [isBtnEnabled, setEnabler] = useState();
    
   

    useEffect(() => {
            setEnabler(true)
        }, [])

  return (
      <section id="services" className="">
          <div className="md:flex hidden flex-col  md:flex-row p-3 items-center md:justify-center space-x-6 mt-10">
          <div className="my-6 md:my-36">
              <article className='mb-10'>
                <h1 className='text-[#4a3daf] text-base font-semibold tracking-wide mb-5 w-max border-b-[0.15rem] border-pink-600'>ANALYTICS AS A SERVICE</h1>
                <h1 className='text-[#4a3daf] text-base font-semibold tracking-wide mb-5 w-max border-b-[0.15rem] border-pink-600'>ARTIFICIAL INTELLIGENCE (AI)</h1>
                <h1 className='text-[#4a3daf] text-base font-semibold tracking-wide w-max border-b-[0.15rem] border-pink-600'>DATA AS A SERVICE</h1>
            </article>
            <div className="group after:absolute after:scale-x-0 after:transition-transform  after:origin-center hover:after:scale-x-100 after:top-0 after:left-0 after:w-full after:h-full after:border-b-2 after:border-black  relative p-6 py-14 pt-16 rounded-md box-shadow max-w-[23rem]">
                <figure className="flex items-center justify-center w-max mb-10 mx-auto">
                  <img className='z-10' src={one} alt="one" />
                  <img className='absolute animate-spin' src={theme} alt="theme"/>
              </figure>
               <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-
            2 text-xl font-bold tracking-wide my-16 mb-4">Data & Analytics</h2>
                  <p className="text-base text-center leading-7">
                      Finance managers worldwide have one goal in common to find cost-effective solutions that drive revenue growth. Our comprehensive, end-to-end solutions help you achieve this goal.
                      {/* <br />
                      <br />
                    Our mission is to make your business functions leaner and more efficient than ever through powerful automation and agile technologies. We’ve helped countless organizations add significant value to their businesses, using state-of-the-art systems and tools that integrate seamlessly into any ERP system. */}
              </p>
              <button className="z-10 box-shadow transition-transform duration-200 group-hover:bg-pink-600 grid place-items-center absolute left-[50%] -translate-x-[50%] top-[100%] -translate-y-[50%] rounded-full bg-white w-16 h-16 text-sm font-bold text-white mx-auto"><BiRightArrowAlt className="transition-all duration-200 text-3xl group-hover:text-white text-pink-600"/></button>
          </div>
          </div>
          
          <div className="h-min group after:absolute after:scale-x-0 after:transition-transform  after:origin-center hover:after:scale-x-100 after:top-0 after:left-0 after:w-full after:h-full after:border-b-2 after:border-black relative p-6 pb-10 pt-16 my-28 rounded-md box-shadow max-w-[23rem]">
                <figure className="flex items-center justify-center w-max mb-10 mx-auto">
                  <img className='z-10' src={two} alt="one" />
                  <img className='absolute animate-spin' src={theme} alt="theme"/>
              </figure>
               <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-
            2 text-xl font-bold tracking-wide my-16 mb-4 text-justify">Software Product Engineering</h2>
                  <p className="text-base text-center leading-7">
                      Creating a business app starts with a holistic view of how your organization works and understanding your current and future goals. Our app design professionals offer decades of combined experience in mobile and app design and development, so you can give your customers more of what they want. 
                      {/* <br />
                      <br />
                    Our mission is to make your business functions leaner and more efficient than ever through powerful automation and agile technologies. We’ve helped countless organizations add significant value to their businesses, using state-of-the-art systems and tools that integrate seamlessly into any ERP system. */}
              </p>
              <button className="z-10 box-shadow transition-all duration-200 group-hover:bg-pink-600 grid place-items-center absolute left-[50%] -translate-x-[50%] top-[100%] -translate-y-[50%] rounded-full bg-white w-16 h-16 text-sm font-bold text-white mx-auto"><BiRightArrowAlt className="transition-all duration-200 text-3xl group-hover:text-white text-pink-600"/></button>
          </div>
          <div className="h-min group after:absolute after:scale-x-0 after:transition-transform  after:origin-center hover:after:scale-x-100 after:top-0 after:left-0 after:w-full after:h-full after:border-b-2 after:border-black relative p-6 pb-10 pt-16 m rounded-md -mt-32 box-shadow max-w-[23rem]">
                <figure className="flex items-center justify-center w-max mb-10 mx-auto">
                  <img className='z-10' src={three} alt="one" />
                  <img className='absolute animate-spin' src={theme} alt="theme"/>
              </figure>
               <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-
            2 text-xl font-bold tracking-wide my-16 mb-4">Cloud Services</h2>
                  <p className="text-base text-center leading-7">
                      It’s now widely recognized that to stay relevant, businesses must adopt Cloud technologies. According to a report by Flexera, 50% of organizations had moved their workloads online by 2020. And with a global market that’s predicted to be worth over $800 billion by 2025, it’s clear that the future lies in the Cloud.
                      {/* <br />
                      <br />
                    Our mission is to make your business functions leaner and more efficient than ever through powerful automation and agile technologies. We’ve helped countless organizations add significant value to their businesses, using state-of-the-art systems and tools that integrate seamlessly into any ERP system. */}
              </p>
              <button className="z-10 box-shadow transition-all duration-200 group-hover:bg-pink-600 grid place-items-center absolute left-[50%] -translate-x-[50%] top-[100%] -translate-y-[50%] rounded-full bg-white w-16 h-16 text-sm font-bold text-white mx-auto"><BiRightArrowAlt className="transition-all duration-200 text-3xl group-hover:text-white text-pink-600"/></button>``
              </div>
          </div>
          <div className="md:hidden block">
          <Slider className="mt-8" {...settings} ref={sliderRef}>

                        <div className="p-10">
                                <article className='hidden md:block mx-auto mb-10 w-max '>
                                    <h1 className='text-[#4a3daf] text-base font-semibold tracking-wide mb-5 w-max border-b-[0.15rem] border-pink-600'>ANALYTICS AS A SERVICE</h1>
                                    <h1 className='text-[#4a3daf] text-base font-semibold tracking-wide mb-5 w-max border-b-[0.15rem] border-pink-600'>ARTIFICIAL INTELLIGENCE (AI)</h1>
                                    <h1 className='text-[#4a3daf] text-base font-semibold tracking-wide w-max border-b-[0.15rem] border-pink-600'>DATA AS A SERVICE</h1>
                                </article>
                                <div className="mx-auto group after:absolute after:scale-x-0 after:transition-transform  after:origin-center hover:after:scale-x-100 after:top-0 after:left-0 after:w-full after:h-full after:border-b-2 after:border-black  relative p-6 py-14 pt-16 rounded-md box-shadow max-w-[23rem]">
                                    <figure className="flex items-center justify-center w-max mb-10 mx-auto">
                                    <img className='z-10' src={one} alt="one" />
                                    <img className='absolute animate-spin' src={theme} alt="theme"/>
                                </figure>
                                <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-
                                2 text-xl font-bold tracking-wide my-16 mb-4">Data & Analytics</h2>
                                    <p className="text-base text-center leading-7">
                                        Finance managers worldwide have one goal in common to find cost-effective solutions that drive revenue growth. Our comprehensive, end-to-end solutions help you achieve this goal.
                                        {/* <br />
                                        <br />
                                        Our mission is to make your business functions leaner and more efficient than ever through powerful automation and agile technologies. We’ve helped countless organizations add significant value to their businesses, using state-of-the-art systems and tools that integrate seamlessly into any ERP system. */}
                                </p>
                                <button className="z-10 box-shadow transition-transform duration-200 group-hover:bg-pink-600 grid place-items-center absolute left-[50%] -translate-x-[50%] top-[100%] -translate-y-[50%] rounded-full bg-white w-16 h-16 text-sm font-bold text-white mx-auto"><BiRightArrowAlt className="transition-all duration-200 text-3xl group-hover:text-white text-pink-600"/></button>
                            </div>
                        </div>
                        <div className="p-10">
                  
                        <div className="mx-auto h-min group after:absolute after:scale-x-0 after:transition-transform  after:origin-center hover:after:scale-x-100 after:top-0 after:left-0 after:w-full after:h-full after:border-b-2 after:border-black relative p-6 pb-10 pt-16 rounded-md box-shadow max-w-[23rem]">
                                <figure className="flex items-center justify-center w-max mb-10 mx-auto">
                                <img className='z-10' src={two} alt="one" />
                                <img className='absolute animate-spin' src={theme} alt="theme"/>
                            </figure>
                            <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-
                            2 text-xl font-bold tracking-wide my-16 mb-4 text-justify">Software Product Engineering</h2>
                                <p className="text-base text-center leading-7">
                                    Creating a business app starts with a holistic view of how your organization works and understanding your current and future goals. Our app design professionals offer decades of combined experience in mobile and app design and development, so you can give your customers more of what they want. 
                                    {/* <br />
                                    <br />
                                    Our mission is to make your business functions leaner and more efficient than ever through powerful automation and agile technologies. We’ve helped countless organizations add significant value to their businesses, using state-of-the-art systems and tools that integrate seamlessly into any ERP system. */}
                            </p>
                            <button className="z-10 box-shadow transition-all duration-200 group-hover:bg-pink-600 grid place-items-center absolute left-[50%] -translate-x-[50%] top-[100%] -translate-y-[50%] rounded-full bg-white w-16 h-16 text-sm font-bold text-white mx-auto"><BiRightArrowAlt className="transition-all duration-200 text-3xl group-hover:text-white text-pink-600"/></button>
                  </div>
              </div>
              <div className="p-10">
                        <div className=" mx-auto group after:absolute after:scale-x-0 after:transition-transform  after:origin-center hover:after:scale-x-100 after:top-0 after:left-0 after:w-full after:h-full after:border-b-2 after:border-black relative p-6 pb-10 pt-16 rounded-md box-shadow max-w-[23rem]">
                                <figure className="flex items-center justify-center w-max mb-10 mx-auto">
                                    <img className='z-10' src={three} alt="one" />
                                    <img className='absolute animate-spin' src={theme} alt="theme"/>
                                </figure>
                            <h2 className="text-[#4a3daf] mx-auto w-max px-8 py-
                            2 text-xl font-bold tracking-wide my-16 mb-4">Cloud Services</h2>
                                <p className="text-base text-center leading-7">
                                    It’s now widely recognized that to stay relevant, businesses must adopt Cloud technologies. According to a report by Flexera, 50% of organizations had moved their workloads online by 2020. And with a global market that’s predicted to be worth over $800 billion by 2025, it’s clear that the future lies in the Cloud.
                                    {/* <br />
                                    <br />
                                    Our mission is to make your business functions leaner and more efficient than ever through powerful automation and agile technologies. We’ve helped countless organizations add significant value to their businesses, using state-of-the-art systems and tools that integrate seamlessly into any ERP system. */}
                            </p>
                            <button className="z-10 box-shadow transition-all duration-200 group-hover:bg-pink-600 grid place-items-center absolute left-[50%] -translate-x-[50%] top-[100%] -translate-y-[50%] rounded-full bg-white w-16 h-16 text-sm font-bold text-white mx-auto"><BiRightArrowAlt className="transition-all duration-200 text-3xl group-hover:text-white text-pink-600"/></button>``
                  </div>
                </div>
              </Slider>
              </div>
          {isBtnEnabled && <div className="md:hidden flex justify-center items-center">
              <ButtonGroup prev={sliderRef.current.slickPrev} next={sliderRef.current.slickNext} pause={sliderRef.current.slickPause} play={sliderRef.current.slickPlay} /></div>}
    </section>
  )
}

export default Services