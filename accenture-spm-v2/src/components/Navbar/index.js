import React from 'react';
import { FaBars } from 'react-icons/fa';
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>ACCNTR</NavLogo>
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
