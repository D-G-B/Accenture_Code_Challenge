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
          <NavLogo to='/'>Accntr</NavLogo>
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
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
