import React from 'react'
import Icon1 from '../../images/client-value.svg'
import Icon2 from '../../images/global-network.svg'
import Icon3 from '../../images/respect-individual.svg'
import Icon4 from '../../images/best-people.svg'
import Icon5 from '../../images/integrity.svg'
import Icon6 from '../../images/stewardship.svg'
import {
  CvContainer,
  CvH1,
  CvWrapper,
  CvCard,
  CvIcon,
  CvH2,
  CvP,
} from './CoreValuesElements';

const CoreValues = () => {
  return (
    <>
      <CvContainer id='services'>
        <CvH1>Our Core Values</CvH1>
        <CvWrapper>
          <CvCard>
            <CvIcon src={Icon1}/>
            <CvH2>Client value creation</CvH2>
            <CvP>
              Enabling clients to become high-performance businesses and creating long-term relationships by being responsive and relevant and by consistently delivering value.
            </CvP>
          </CvCard>
          <CvCard>
            <CvIcon src={Icon2}/>
            <CvH2>One global network</CvH2>
            <CvP>
              Leveraging the power of global insight, relationships, collaboration and learning to deliver exceptional service to clients wherever they do business.
            </CvP>
          </CvCard>
          <CvCard>
            <CvIcon src={Icon3}/>
            <CvH2>Respect for the individual </CvH2>
            <CvP>
              Valuing diversity and unique contributions, fostering a trusting, open and inclusive environment and treating each person in a manner that reflects Accenture's values.
            </CvP>
          </CvCard>
          <CvCard>
            <CvIcon src={Icon4}/>
            <CvH2>Best people</CvH2>
            <CvP>
              Attracting, developing and retaining the best talent for our business, challenging our people, demonstrating a 'can-do' attitude and fostering a collaborative and supportive environment.
            </CvP>
          </CvCard>
          <CvCard>
            <CvIcon src={Icon5}/>
            <CvH2>Integrity</CvH2>
            <CvP>
              Being ethically unyielding and honest and inspiring trust by saying what we mean, matching our behaviors to our words and taking responsibility for our actions.
            </CvP>
          </CvCard>
          <CvCard>
            <CvIcon src={Icon6}/>
            <CvH2>Stewardship</CvH2>
            <CvP>
              Fulfilling our obligation of building a better, stronger and more durable company for future generations, protecting the Accenture brand, meeting our commitment to stakeholders, acting with an owner mentality, developing our people and helping improve communities and the global environment.
            </CvP>
          </CvCard>
        </CvWrapper>
      </CvContainer>
    </>
  )
}

export default CoreValues
