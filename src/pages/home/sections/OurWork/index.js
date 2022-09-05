import React from 'react'
import Button from '../../../../components/Button/index'
import Carousel from '../../../../components/Carousel'
import CarouselItem from '../../../../components/CarouselItem'
import { CarouselSliderData } from '../../../../mockData/CarouselSliderData'
import HeaderSection from '../../../../components/HeaderSection'


const OurWork = ({ descriptionText }) => {

  return (
    <section className="our-work">
      <HeaderSection headerText="Наши работы" />
      <Carousel>
        {CarouselSliderData.map((e, i, arr) => {
          return (
            <div key={i} className="our-work__content">
              <div className="our-work__content__description-container">
                <div className="our-work__content__description-container__description">{descriptionText}</div>
                <Button type="primary"><span>Консультация</span></Button>
                <CarouselItem
                  currentIndex={i + 1}
                  length={arr.length}
                />
              </div>
              <img
                src={e.image}
                alt="our work"
                width="650px"
                height="490px"
              />
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
export default OurWork
