import React from 'react'
import "./Nav.css"
import { SlArrowDown } from "react-icons/sl";
import logo from "./image/w3logo.png"
import { FiMoreVertical } from "react-icons/fi";
import Button from '../Btn/Button';

const Nav = () => {
  return (
   
    <nav className="nav_bar">

      <div className="logo">
        <img src={logo} alt="Logo" className='logo'/>
      </div>


      <ul className="nav_bar_items">

        <li className="bar_item">
          <a href="#">Tutorials <SlArrowDown /></a>
        </li>

        <li className="bar_item">
          <a href="#">References <SlArrowDown /></a>
        </li>

        <li className="bar_item">
          <a href="#">Exercises <SlArrowDown /></a>
        </li>

        <li className="bar_item">
          <a href="#">Certificates <SlArrowDown /></a>
        </li>

      </ul>

      <div className="search">
        <input type="text" placeholder="Search..." className='search_input' />
        <FiMoreVertical />
      </div>

      <ul>
        <li>Bootcamps</li>
        <li>Spaces</li>
        <li>Teachers</li>
        <li>Upgrade</li>
        <li>Get Certified</li>
      </ul>

      <Button />
    </nav>
  )
}

export default Nav