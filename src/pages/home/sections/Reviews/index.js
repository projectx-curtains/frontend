import React from 'react'
import Carousel from '../../../../components/Carousel'
import CarouselItem from '../../../../components/CarouselItem'
import { CarouselSlider_mockData } from '../../../../mockData/carouselSlider_mockData'
import HeaderSection from '../../../../components/HeaderSection'
import formatQuote from '../../../../assets/img/format_quote.svg'
import { app_mockData } from '../../../../mockData/app_mockData'
import UpArrow from '../../../../assets/icons/UpArrow.svg'

const Reviews = () => {

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className="reviews">
      <HeaderSection headerText="Отзывы" />
      <Carousel>
        {CarouselSlider_mockData.map((e, i, arr) => {
          return (
            <div key={i} className="reviews-content">
              <div className="image-container">
                <img
                  className="image"
                  src={e.image}
                  alt="our work"
                  width="650px"
                  height="513px"
                />
                <div className="user">
                  <div className="user__name">{app_mockData.reviews.user}</div>
                  <div className="user__location">{app_mockData.reviews.location}</div>
                </div>
              </div>
              <div className="description">
                <div className="description-container">
                  <img src={formatQuote} alt="review" />
                  <CarouselItem
                    currentIndex={i + 1}
                    length={arr.length}
                  />
                </div>
                <div className="user">
                  <div className="user__name">{app_mockData.reviews.user}</div>
                  <div className="user__location">{app_mockData.reviews.location}</div>
                </div>
                <div className="description__description">{app_mockData.reviews.descriptionText}</div>
              </div>
            </div>

          )
        })}
      </Carousel>
      <div className="button-scroll-up">
        <img
          // src={require(`../../../../assets/icons/UpArrow.svg`)}
          src={UpArrow}
          alt="icon"
          width="44px"
          height="44px"
          onClick={handleScrollUp}
        />
      </div>
    </section>
  )
}
export default Reviews
