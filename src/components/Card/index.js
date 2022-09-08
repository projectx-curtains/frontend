import React from "react";


const Card = ({index, setName, setPrice, onClick,label}) => {
    return (
      <div           
        onClick={onClick}
        className= 'Card'
        >
          <div className='label'><span className="label_text">Новинка</span></div>
          <div className = 'Card__img'></div>
          <h1 className = 'Card__name'>{`${index} ${setName}`}</h1>
          <p className = 'Card__price-amount'>{setPrice}</p>  
      </div>
    )
  }

  export default Card;