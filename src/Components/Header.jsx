import React from 'react';
import logo1 from '../assests/images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
  {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-light bg-dark py-5">
    <div className="container">
      <a className="navbar-brand" href="#">
       <img src={logo1} alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active p-2">
            {/* <a className="nav-link text-white text-lg" href="#">
              Home
            </a> */}
            <NavLink className='nav-link text-white' to='/'>
            Home
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink className='nav-link text-white' to="/about" >
            About
            </NavLink>
            </li>
            <li className="nav-item p-2">
            <NavLink className='nav-link text-white' to="/services" >
            Services
            </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className='nav-link text-white' to="/blog" >
                Blog
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className='nav-link text-white' to="/contact" >
                Contact
              </NavLink>
            </li>
        </ul>
      </div>
      <div className='button px-5'>
      <button className='px-3 py-2'>
      Make a Reservation
      </button>
      </div>
    </div>
  </nav>
</>
  )
}
export default Header;
