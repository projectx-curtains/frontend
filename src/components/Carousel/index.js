import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';


const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 45000,

};

export const Carousel = ({ children }) => {
    return (
        <div className='slider__container'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>

    );
};
export default Carousel;