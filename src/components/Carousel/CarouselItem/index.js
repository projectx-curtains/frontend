import React from 'react'

const CarouselItem = ({ currentIndex, length }) => {
  return (
    <div className="index-slide">
      <div className="index-slide-wrapper">
        <div className="index-slide-wrapper__current-slide">0{currentIndex}/</div>
        <div className="index-slide-wrapper__slides-length">0{length}</div>
      </div>
    </div>
  )
}
export default CarouselItem
