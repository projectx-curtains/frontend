import React from "react";
import { FaArrowUp } from "react-icons/fa";



const CatalogCard = ({type, setText, onClick,}) => {
    return (
    <a           
        onClick={onClick}
        className= {`${type}-card`} //small,medium,large
        >

        {/*<div className= {`${type}-card__inner-img`}></div>*/}
            
        <div className = {`${type}-card__container`}>
            <div className={`${type}-card__wrapper`}>
                <h2 className = {`${type}-card__name`}>{`${setText}`}</h2>
                <FaArrowUp className={`${type}-card__arrow`}></FaArrowUp>
            </div>
        </div>
    </a>
    )
  }

  export default CatalogCard;