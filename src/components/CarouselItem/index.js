import React from 'react';
import './index.scss';

const CarouselItem = ({ currentIndex, length }) => {
    return (
        <div className='index__slide__container'>
            <div className='wrapper'>
                <div className='current__slide'>0{currentIndex}/</div>
                <div className='slides__length'>0{length}</div>
            </div>
        </div>
    )
}
export default CarouselItem;