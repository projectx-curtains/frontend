import React from 'react'

const CarouselItem = ({ currentIndex, length }) => {
  return (
    <div className="index-slide">
      <div className="wrapper">
        <div className="wrapper__current-slide">0{currentIndex}/</div>
        <div className="wrapper__slides-length">0{length}</div>
      </div>
    </div>
  )
}
export default CarouselItem
