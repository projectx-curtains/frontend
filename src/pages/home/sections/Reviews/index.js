import React from 'react'
import Carousel from '../../../../components/Carousel'
import CarouselItem from '../../../../components/CarouselItem'
import { CarouselSliderData } from '../../../../mockData/CarouselSliderData'
import HeaderSection from '../../../../components/HeaderSection'
import formatQuote from '../../../../img/format_quote.svg'

const Reviews = ({ user, location, descriptionText }) => {

  return (
    <section className="reviews">
      <HeaderSection headerText="Отзывы" />
      <Carousel>
        {CarouselSliderData.map((e, i, arr) => {
          return (
            <div key={i} className="reviews__content">
              <img
                src={e.image}
                alt="our work"
                width="650px"
                height="513px"
              />
              <div className="reviews__content__description">
                <div>
                  <img src={formatQuote} alt="review" />
                  <CarouselItem
                    currentIndex={i + 1}
                    length={arr.length}
                  />
                </div>
                <div className="reviews__content__description__user">{user}</div>
                <div className="reviews__content__description__location">{location}</div>
                <div className="reviews__content__description__description">{descriptionText}</div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
export default Reviews
