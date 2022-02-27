import { list } from 'postcss';
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {FaBars} from "react-icons/fa"
import logo from '../assets/sticky-logo.png'



const navitem = ["Home", "About Us", "IT solutions", "Case Studies", "News", "Contact"]

function Header() {
  
  return (
    <header className="flex px-5 shadow items-center justify-between"> 
          <figure>
        <img src={logo} alt="Zentec"/>
          </figure>
          <nav className="h-full">
            <ul className="hidden md:flex relative h-full flex-row space-x-8 "> 
              {navitem.map((list, index) => {
                return <li
                  key={index} className={`p-2 py-8 h-full tracking-wide cursor-pointer ${index === 0 && "text-pink-600 after:w-full] "} hover:text-pink-600 relative after:border-b-2 after:absolute after:top-0 after:left-0 after:h-full after:w-[0] after:border-b-pink-600 hover:after:w-full after:transition-[width] ${index === 0 && "text-pink-600 after:w-full "}`}>{list}</li>
                  })}
                  <li className="p-2 py-8 font-semibold">
                      <FaSearch className="text-xl"/>
                  </li>    
            </ul>
            <FaBars className="my-4 text-3xl cursor-pointer block md:hidden"/>
          </nav>
     </header>
  )
}

export default Header