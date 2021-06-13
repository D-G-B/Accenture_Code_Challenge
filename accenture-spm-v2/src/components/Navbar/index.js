import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, 
         NavbarContainer, 
         NavLogo, 
         MobileIcon,
         NavMenu, 
         NavItem, 
         NavLinks,
         NavBtn,
         NavBtnLink
       } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            ACCNTR
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Global</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Equality</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Core Values</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Change</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={{ pathname: "https://www.accenture.com/us-en/about/company-index" }} target="_blank">Learn More</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
