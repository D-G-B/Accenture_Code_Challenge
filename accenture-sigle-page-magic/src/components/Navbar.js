import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  // states
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // clicks
  const handleClick = () => setClick(!click);
  const closeMolbileMenu = () => setClick(false);

  // 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false); 
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            ACCNTR
            <i class='fas fa-chevron-right'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu acitive' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMolbileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services'className='nav-links' onClick={closeMolbileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMolbileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMolbileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}       
        </div>
      </nav>
    </>
  );
}

export default Navbar;
