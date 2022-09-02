
import React from "react";
import { FaArrowUp } from "react-icons/fa";



const XLc = ({setText, onClick,}) => {
    return (
    <div           
        onClick={onClick}
        className= 'XL-card'
        >

        <div className="XL-card__inner">
            <div className = 'XL-card__inner__img'>
                <img src='./images/curtainsSq.jpeg' alt='curtainsSq'/>
            </div>
        </div>
        <div className = 'XL-card__text'>
            <h1>{`${setText}`}</h1>
            <a href="./catalog"><FaArrowUp/></a>
        </div>
    </div>
    )
  }

  export default XLc;