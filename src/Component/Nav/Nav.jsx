import React from 'react'
import "./Nav.css"
import { SlArrowDown } from "react-icons/sl";

const Nav = () => {
  return (
    <nav className="nav_bar">
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
    </nav>
  )
}

export default Nav