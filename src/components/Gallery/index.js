import React from 'react'
import HeaderSection from '../HeaderSection';
import Button from '../Button';
import './index.scss';

const Gallery = ({children, newProductData, headerText }) => {
    return (
        <section className='gallery'>
            <div className='container'>
                <div className='header__container'>
                    <HeaderSection headerText={headerText} />
                    <Button><span>Смотреть все</span></Button>
                </div>
                <div className='gallery__content__container'>
                    {children}
                </div>
            </div>
        </section >
    )
}
export default Gallery;