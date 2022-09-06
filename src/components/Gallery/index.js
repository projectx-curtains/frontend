import React from 'react'
import HeaderSection from '../HeaderSection'
import Button from '../Button/index'
import Card from '../Card'

const Gallery = ({ items, headerText }) => {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-container__header">
          <HeaderSection headerText={headerText} />
          <Button type="secondary"  arrowRight><span>Смотреть все</span></Button>
        </div>
        <div className="gallery-container__content">
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
