import React from "react";


const Card = ({index, setName, setPrice, onClick}) => {
    return (
      <div           
        onClick={onClick}
        className= 'Card'
        >
          <img className = 'Card__img' src='./images/curtains.jpeg' alt='curtains' />
          <h1 className = 'Card__name'>{`${index} ${setName}`}</h1>
          <p className = 'Card__price-amount'>{setPrice}</p>  
      </div>
    )
  }

  export default Card;