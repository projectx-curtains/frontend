import React from 'react'
import Carousel from '../../../../components/Carousel'
import CarouselItem from '../../../../components/CarouselItem'
import { CarouselSlider_mockData } from '../../../../mockData/carouselSlider_mockData'
import HeaderSection from '../../../../components/HeaderSection'
import formatQuote from '../../../../assets/img/format_quote.svg'
import { app_mockData } from '../../../../mockData/app_mockData'

const Reviews = () => {

  return (
    <section className="reviews">
      <HeaderSection headerText="Отзывы" />
      <Carousel>
        {CarouselSlider_mockData.map((e, i, arr) => {
          return (
            <div key={i} className="reviews-content">
              <img
                src={e.image}
                alt="our work"
                width="650px"
                height="513px"
              />
              <div className="description">
                <div>
                  <img src={formatQuote} alt="review" />
                  <CarouselItem
                    currentIndex={i + 1}
                    length={arr.length}
                  />
                </div>
                <div className="description__user">{app_mockData.reviews.user}</div>
                <div className="description__location">{app_mockData.reviews.location}</div>
                <div className="description__description">{app_mockData.reviews.descriptionText}</div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
export default Reviews
