import React from 'react'
import CardItem from './CardItem.tsx'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        {/* <h1>Placeholder Text</h1> */}
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className="cards__items">
                    <li className="cards__item">
                        <CardItem 
                            icon={<i className="fa fa-shopping-cart" />}
                            text='Expense Tracking'
                            desc='Easily organize and track group expenses with descriptions, dates, receipts, and balances – all in one place.'
                        />
                    </li>
                    <li className="cards__item">
                        <CardItem 
                            icon={<i className="fa fa-tasks" />}
                            text='Smart Splitting'
                            desc='Customize how expenses are shared with percentage or amount-based splits for flexible and fair contributions.'
                        />
                    </li>
                    <li className="cards__item">
                        <CardItem 
                            icon={<i className="fa fa-folder-o" />}
                            text='Automatic Calculations'
                            desc='Let Evenly handle the math with instant balance updates and clear summaries for every transaction.'
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards