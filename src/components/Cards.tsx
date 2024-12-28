import React from 'react'
import CardItem from './CardItem.tsx'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Placeholder Text</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className="cards__items">
                    <li className="cards__item">
                        <CardItem 
                            icon={<i className="fa fa-download" />}
                            text='Placeholder Text'
                            link={false}
                            // label='Placeholder Text'
                            // path='/placeholder'
                        />
                    </li>
                    <li className="cards__item">
                        <CardItem 
                            src='images/placeholder.jpg'
                            text='Placeholder Text'
                            // label='Placeholder Text'
                            // path='/placeholder'
                        />
                    </li>
                    <li className="cards__item">
                        <CardItem 
                            src='images/placeholder.jpg'
                            text='Placeholder Text'
                            // label='Placeholder Text'
                            // path='/placeholder'
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards