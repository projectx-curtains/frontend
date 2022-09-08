import React from "react";
import { FaArrowUp } from "react-icons/fa";

const CatalogCard = ({type, setText, onClick}) => {
    return (
    <a           
        onClick={onClick}
        className= {`${type}-card`}
        >
        <div className = {`${type}-card__container`}>
            <div className={`${type}-card__description`}>
                <h2 className = {`${type}-card__name`}>{`${setText}`}</h2>
                <FaArrowUp className={`${type}-card__arrow`}></FaArrowUp>
            </div>
        </div>
    </a>
    )
  }

  export default CatalogCard;
  