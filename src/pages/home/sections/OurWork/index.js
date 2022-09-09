import React from 'react'
import Button from '../../../../components/Button/index'
import Carousel from '../../../../components/Carousel'
import CarouselItem from '../../../../components/CarouselItem'
import { CarouselSlider_mockData } from '../../../../mockData/carouselSlider_mockData'
import HeaderSection from '../../../../components/HeaderSection'
import { app_mockData } from '../../../../mockData/app_mockData'


const OurWork = () => {

  return (
    <section className="our-work">
      <HeaderSection headerText="Наши работы" />
      <Carousel>
        {CarouselSlider_mockData.map((e, i, arr) => {
          return (
            <div key={i} className="work-content">
              <div className="description-container">
                <div className="description-container__description">{app_mockData.ourWork.descriptionText}</div>
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
