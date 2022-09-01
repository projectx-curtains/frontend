
import React from "react";
import { FaArrowUp } from "react-icons/fa";



const Sc = ({setText, onClick,}) => {
    return (
    <div           
        onClick={onClick}
        className= 'S-card'
        >

        <div className="S-card__inner">
            <div className = 'S-card__inner__img'>
                <img src='./images/curtainsSq.jpeg' alt='curtainsSq'/>
            </div>
        </div>
        <div className = 'S-card__text'>
            <h1>{`${setText}`}</h1>
            <a href="./catalog"><FaArrowUp/></a>
        </div>
    </div>
    )
  }

  export default Sc;