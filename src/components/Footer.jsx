import React from 'react'
import logo from '../assets/theme-icon-2.png'

function Footer() {
  return (
      <footer id="contacts" className="border-t-2 border-gray-300 mt-20 md:mt-0 p-8">
          <ul className="mb-10">
              <li className="mb-8 leading-6 border-b-2 border-pink-500 w-max text-[#4a3daf] text-lg font-semibold tracking-wide">CLOUD MIGRATION AND DEPLOYMENT</li>
              <li className="mb-8 leading-6 border-b-2 border-pink-500 w-max text-[#4a3daf] text-lg font-semibold tracking-wide">BIG DATA ANALYTICS</li>
              <li className="mb-8 leading-6 border-b-2 border-pink-500 w-max text-[#4a3daf] text-lg font-semibold tracking-wide">CLOUD MANAGED SERVICES</li>
              <li className="border-b-2 leading-6 border-pink-500 w-max text-[#4a3daf] text-lg font-semibold tracking-wide">DEVOPS</li>
          </ul>
          <div >
              Careers page
              <br />
              Contact us: 
              <br/>
            Email: hr@aceintegrator.com
          </div>
             {/* <img className="absolute -translate-y-[50%] left-[50%] -translate-x-[50%]" src={logo} alt= "log"/> */}
            
    </footer>
  )
}

export default Footer