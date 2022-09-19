import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Button from '../Button'
import HeaderSection from '../HeaderSection'
import Card from '../Card'

const Gallery = ({ items, headerText }) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-container__header">
          <HeaderSection headerText={headerText} />
          {isTabletOrMobile ?
            <Button type="transparent" arrowRight><span>Все</span></Button> :
            <Button type="secondary" arrowRight><span>Смотреть все</span></Button>
          }
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
