import React from 'react'
import CardItem from './CardItem.tsx'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Placeholder Text</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className="cards__items">
                    <CardItem 
                        src='images/placeholder.jpg'
                        text='Placeholder Text'
                        // label='Placeholder Text'
                        path='/placeholder'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src='images/placeholder.jpg'
                        text='Placeholder Text'
                        // label='Placeholder Text'
                        path='/placeholder'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src='images/placeholder.jpg'
                        text='Placeholder Text'
                        // label='Placeholder Text'
                        path='/placeholder'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards