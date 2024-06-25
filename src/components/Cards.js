import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these gaming platforms!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://download.logo.wine/logo/PlayStation/PlayStation-Logo.wine.png'
              text='Try out Playstation'
              label='Playstation'
              path='/playstation'
            />
            <CardItem
              src='https://download.logo.wine/logo/Steam_(service)/Steam_(service)-Logo.wine.png'
              text='Try out Steam'
              label='Steam'
              path='/steam'
            />
            <CardItem
              src='https://assets.xboxservices.com/assets/48/de/48de604b-99ee-4400-a600-6958a71f0959.jpg?n=Microsoft-Store-2018_Priority-Feature-0_Pay_1040x585.jpg'
              text='Try out Xbox'
              label='Xbox'
              path='/xbox'
            />
   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
