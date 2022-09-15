import React from 'react'
import HeaderSection from '../HeaderSection'
import Card from '../Card'
import UsedButton from '../UsedButton'

const Gallery = ({ items, headerText }) => {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-container__header">
          <HeaderSection headerText={headerText} />
          <UsedButton
            firstButton="secondary"
            firstButtonText="Смотреть все"
            firstArrowRight
            secondButton="transparent"
            secondButtonText="Все"
            secondArrowRight
          />
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
