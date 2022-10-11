import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const settings = {
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 45000,

}

export const Carousel = ({ children }) => {
  return (
    <div className="slider">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>

  )
}
export default Carousel
