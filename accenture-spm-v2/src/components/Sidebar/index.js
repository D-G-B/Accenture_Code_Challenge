import React from 'react';
import { SidebarContainer,
         Icon,
         CloseIcon,
         SidebarWrapper,
         SidebarMenu,
         SidebarLink,
         SideBtnWrap,
         SidebarRoute   
       } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Global</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Equality</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Core Values</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Change</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar
