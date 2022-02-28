import { list } from 'postcss';
import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import {FaBars} from "react-icons/fa"
import logo from '../assets/sticky-logo.png'
import { Link } from 'react-scroll'


const navitem = [
  "Home",
  "About Us",
  "IT staffing",
  "Msp",
  "Services",
  "Contacts"
]

function Header() {

   const [isSelected, setSelected] = useState({
        0 : true
   })
  
   const [isDrawerToggled, setDrawerToggle] = useState(false)
    
  const handleMobileDrawer = (open=false) => {
        setDrawerToggle(open)
  }
  
  const handleClick = (index) => {
        setSelected(prev=> ({[index] : true}))
    }
  
  return (
    <header className="flex px-5 shadow-2xl items-center justify-between"> 
          <figure>
        <img src={logo} alt="Zentec"/>
          </figure>
          <nav className="h-full">
            <ul className="hidden md:flex relative h-full flex-row space-x-8 "> 
          {navitem.map((list, index) => {
                return <li
                   className='flex items-center' key={index} ><Link onClick={()=>handleClick(index)} className={`p-2 py-8 h-full tracking-wide cursor-pointer ${isSelected[index] && "text-pink-600 after:w-full] "} hover:text-pink-600 relative after:border-b-[0.15rem] after:absolute after:top-0 after:left-0 after:h-full after:w-[0] after:border-b-pink-600 hover:after:w-full after:transition-[width] ${isSelected[index] && "text-pink-600 after:w-full "}`} duration={500} to={list.toLowerCase()} spy={true} smooth={true}>{list}</Link></li>
                  })}
                  <li className="p-2 py-8 font-semibold">
                      <FaSearch className="text-xl"/>
                  </li>    
            </ul>
            <FaBars onClick={()=>handleMobileDrawer(true)} aria-label="menu button" className="my-4 text-3xl cursor-pointer block md:hidden"/>
      </nav>
      {isDrawerToggled &&
                <nav className="w-[20rem] h-screen fixed top-0 left-0 bg-[#4a3daf] z-50 px-4 py-4 ">
                    <div className="float-right "><FaTimes area-label="close button" className="text-2xl text-white" onClick={()=>handleMobileDrawer(false)}/></div>
                <ul className="w-full h-full flex flex-col py-[1.5rem] ">
                    {navitem.map((item, index) => {
                      return (
                              <React.Fragment key={index}>
                                <li className="min-w-[5rem] mb-10 cursor-pointer" key={index}>
                                      <Link  onClick={()=>handleClick(index)} className=" text-white text-2xl" to={item.toLowerCase()} spy={true} smooth={true}>{item}</Link>
                                </li>
                                {index === ~(-navitem.length) && <hr className='h-[0.01rem] bg-white'/>}
                            </React.Fragment>
                            )
                    })}
                </ul>
            </nav>}
     </header>
  )
}

export default Header