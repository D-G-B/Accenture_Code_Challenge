import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout this amzing info</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src='images/pexels-01.jpg'
            text='PLaceholder Text PLaceholder Text PLaceholder Text PLaceholder Text PLaceholder Text'
            label='????Adventure????'
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
