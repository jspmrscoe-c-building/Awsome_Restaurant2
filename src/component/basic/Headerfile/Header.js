import React from 'react';
import './Header.css';
import { NavLink, Switch, Route } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>A</span>wsome
            <span>R</span>estaurant
          </h2>
        </div>
        <div className='menu-link'>
          <ul>
            <li>
              <NavLink to='/' exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' exact>
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink to='/service' exact>
                Service
              </NavLink>
            </li> */}
            <li>
              <NavLink to='/contact' exact>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/Search' exact>
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to='/Signup'>Login/SignUp</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Header;
