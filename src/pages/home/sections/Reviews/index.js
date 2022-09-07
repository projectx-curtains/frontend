import React from 'react'
import Carousel from '../../../../components/Carousel'
import CarouselItem from '../../../../components/CarouselItem'
import { CarouselSliderData } from '../../../../mockData/CarouselSliderData'
import HeaderSection from '../../../../components/HeaderSection'
import formatQuote from '../../../../assets/img/format_quote.svg'


const descriptionText = '“Если хочется почувствовать себя дизайнером, то вам определенно в «Зашторим»! Уникальность конструктора штор поражает и убирает неудобства, вызванные при заказе стандартных готовых штор: не подошел цвет, высота и ширина, крепление к карнизу и пр. В общем, всем рекомендую!”'
const user = 'Галина'
const location = 'г.Могилев, Беларусь'

const Reviews = () => {

  return (
    <section className="reviews">
      <HeaderSection headerText="Отзывы" />
      <Carousel>
        {CarouselSliderData.map((e, i, arr) => {
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
                <div className="description__user">{user}</div>
                <div className="description__location">{location}</div>
                <div className="description__description">{descriptionText}</div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
export default Reviews
