import React from 'react'

function CardItem(props) {
  return (
    <>
        <li className="cards__item">
            <div className="card__item__link" to={props.path}>
                <figure className="cards__item__icon-wrap">
                    {props.icon}
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                    <h6 className="cards__item__desc">{props.desc}</h6>
                </div>
            </div>
        </li>
    </>
  )
}

export default CardItem