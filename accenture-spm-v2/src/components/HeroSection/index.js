import React, { useState } from 'react';
import Video from '../../videos/Network-Dark.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, 
         HeroBg,
         VideoBg,
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight
       } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/Network-Dark.mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Discover Accenture:</HeroH1>
        <HeroP>
          Delivering on the promise of technology and human ingenuity, we embrace the power of change to create 360° value for our clients, people and communities.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
          primary='true'
          dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
