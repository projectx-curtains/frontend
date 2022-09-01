import React from 'react'
import Carousel from '../../../../components/Carousel';
import CarouselItem from '../../../../components/CarouselItem';
import { CarouselSliderData } from '../../../../components/Carousel/CarouselSliderData';
import HeaderSection from '../../../../components/HeaderSection';
import './index.scss';
import formatQuote from '../../../../img/format_quote.svg';

const Reviews = ({ user, location, descriptionText }) => {

    return (
        <section className='reviews'>
            <HeaderSection headerText='Отзывы' />
            <Carousel>
                {CarouselSliderData.map((e, i, arr) => {
                    return (
                        <div className='reviews__content__container'>
                            <img
                                src={e.image}
                                alt='our work'
                                width='650px'
                                height='513px'
                            />
                            <div className='description__container'>
                                <div>
                                    <img src={formatQuote} />
                                    <CarouselItem currentIndex={i + 1} length={arr.length} />
                                </div>
                                <div className='user'>{user}</div>
                                <div className='location'>{location}</div>
                                <div className='description'>{descriptionText}</div>

                            </div>

                        </div>
                    )
                })}
            </Carousel>
        </section>
    )
}
export default Reviews;