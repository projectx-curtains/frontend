import React from 'react'

const CarouselItem = ({ currentIndex, length }) => {
  return (
    <div className="index-slide">
      <div className="index-slide__wrapper">
        <div className="index-slide__wrapper__current-slide">0{currentIndex}/</div>
        <div className="index-slide__wrapper__slides-length">0{length}</div>
      </div>
    </div>
  )
}
export default CarouselItem
