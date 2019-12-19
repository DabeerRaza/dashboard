import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <nav className="bottomNavBar navbar navbar-expand-md">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/#">Home</Link></li>
          <li className="nav-item"><Link to="/#">Services</Link></li>
          <li className="nav-item"><Link to="/#">About</Link></li>
          <li className="nav-item"><Link to="/#">Products</Link></li>
          <li className="nav-item"><Link to="/#">Blog</Link></li>
        </ul>
      </nav>
      
    </>
  )
}

export default Footer
