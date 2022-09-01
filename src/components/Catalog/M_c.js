
import React from "react";
import { FaArrowUp } from "react-icons/fa";



const Mc = ({setText, onClick,}) => {
    return (
    <div           
        onClick={onClick}
        className= 'M-card'
        >

        <div className="M-card__inner">
            <div className = 'M-card__inner__img'>
                <img src='./images/curtainsSq.jpeg' alt='curtainsSq'/>
            </div>
        </div>
        <div className = 'M-card__text'>
            <h1>{`${setText}`}</h1>
            <a href="./catalog"><FaArrowUp/></a>
        </div>
    </div>
    )
  }

  export default Mc;