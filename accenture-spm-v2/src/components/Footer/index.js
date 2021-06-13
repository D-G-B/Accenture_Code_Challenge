import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Investors</FooterLink>
                <FooterLink to='/'>Terms Of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>More Links</FooterLinkTitle>
                <FooterLink to='/'>None Work</FooterLink>
                <FooterLink to='/'>Sorry</FooterLink>
                <FooterLink to='/'>This supercoder</FooterLink>
                <FooterLink to='/'>Ran out of time</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Much Links</FooterLinkTitle>
                <FooterLink to='/'>Such beauty</FooterLink>
                <FooterLink to='/'>Purely For</FooterLink>
                <FooterLink to='/'>Making This</FooterLink>
                <FooterLink to='/'>Footer Pretty</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>So Many Links</FooterLinkTitle>
                <FooterLink to='/'>Click me!</FooterLink>
                <FooterLink to='/'>No ME</FooterLink>
                <FooterLink to='/'>PLs sir!</FooterLink>
                <FooterLink to='/'>I am Lonely</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              ACCNTR
            </SocialLogo>
            <WebsiteRights>
            ACCNTR ™  ©  {new Date().getFullYear()} --
            All Rights Reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/AccentureDACH/' target='_blank'
              aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.youtube.com/user/AccentureVideosASG/feed' target='_blank'
              aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/accenturedach' target='_blank'
              aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/accenture' target='_blank'
              aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/accenturedach/' target='_blank'
              aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer
