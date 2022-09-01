import React from "react";

const card ={
  cursor: 'pointer',
};

const Card = ({index, setName, setPrice, onClick,}) => {
    return (
      <div           
        onClick={onClick}
        className= 'Card'
        >
          <img className = 'Card__img' src='./images/curtains.jpeg' alt='curtains' />
          <h1 className = 'Card__indexName'>{`${index} ${setName}`}</h1>
          <p className = 'Card__priceAmount'>{setPrice}</p>  
      </div>
    )
  }

  export default Card;