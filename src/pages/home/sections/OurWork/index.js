import React from 'react'
import Button from '../../../../components/Button/index'
import Carousel from '../../../../components/Carousel'
import CarouselItem from '../../../../components/CarouselItem'
import { CarouselSliderData } from '../../../../mockData/CarouselSliderData'
import HeaderSection from '../../../../components/HeaderSection'

const descriptionText = 'Фото с комплектом "Кармен": в уютной квартире семьи Сергея и Татьяны не хватало акцентного элемента, который одновременно подчеркивал бы характер хозяев, а также украшал интерьер. В реализации идеи были использованы такие материалы как канвас и тюль сетка, а цвета подобраны под смелый запрос хозяев – красный и молочный.'

const OurWork = () => {

  return (
    <section className="our-work">
      <HeaderSection headerText="Наши работы" />
      <Carousel>
        {CarouselSliderData.map((e, i, arr) => {
          return (
            <div key={i} className="work-content">
              <div className="description-container">
                <div className="description-container__description">{descriptionText}</div>
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
