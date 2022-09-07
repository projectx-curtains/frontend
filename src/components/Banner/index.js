import React from 'react';
import Button from '../Button';

function Banner() {
  return (
    <div className='banner'>
        <h2 className='banner__headline'>СТИЛЬ И УЮТ <br/> В КАЖДОЙ ДЕТАЛИ</h2>
        <h3 className='banner__subtitle'>Создай свой дизайн-проект штор от идеи до реализации</h3>
        <Button
        className="btn"
        onClick={() => console.log('hiii')}>
        <span className="btn__text">
            Создать свой проект штор
        </span>
      </Button>
    </div>
  )
}


export default Banner;