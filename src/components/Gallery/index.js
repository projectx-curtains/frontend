import React from 'react'
import HeaderSection from '../HeaderSection'
import Button from '../Button/index'
import Card from '../Card'

const Gallery = ({ items, headerText }) => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__container__header">
          <HeaderSection headerText={headerText} />
          <Button type="secondary" arrowLeft arrowRight><span>Смотреть все</span></Button>
        </div>
        <div className="gallery__container__content">
          {items && items.map((item, i) => {
            return (
              <Card
                key={i}
                image={item.image}
                index={item.index}
                setName={item.setName}
                setPrice={`ОТ ${item.setPrice} BYN`}
                onClick={() => console.log('card click')}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Gallery
