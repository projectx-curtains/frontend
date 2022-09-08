import React from 'react';
import './index.scss';
import { FaArrowUp } from "react-icons/fa";

const Category = ({setText, type, onClick,}) => {

  return (
    <a           
        onClick={onClick}
        className= {`${type}-category`}
        >
        <div className = {`${type}-category__text-wrapper`}>
            <h2 className = {`${type}-category__text`}>{`${setText}`}</h2>
            <FaArrowUp/>
        </div>
    </a>
  )
}

export default Category;