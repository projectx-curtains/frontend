import React from 'react'
import Button from '../../../../components/Button';
import Carousel from '../../../../components/Carousel';
import CarouselItem from '../../../../components/CarouselItem';
import { CarouselSliderData } from '../../../../components/Carousel/CarouselSliderData';
import HeaderSection from '../../../../components/HeaderSection';
import './index.scss';


const OurWork = ({ descriptionText }) => {

    return (
        <section className='our__works'>
            <HeaderSection headerText='Наши работы' />
            <Carousel>
                {CarouselSliderData.map((e, i, arr) => {
                    return (
                        <div className='our__works__content__container'>
                            <div className='description__container'>
                                <div className='description'>{descriptionText}</div>
                                <Button
                                    type='primary'
                                    className='our__works__btn'
                                ><span>Консультация</span></Button>
                                <CarouselItem
                                    currentIndex={i + 1}
                                    length={arr.length}
                                />
                            </div>
                            <img
                                src={e.image}
                                alt='our work'
                                width='650px'
                                height='490px'
                            />
                        </div>
                    )
                })}
            </Carousel>
        </section>
    )
}
export default OurWork;