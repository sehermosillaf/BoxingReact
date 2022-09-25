import Carousel from "react-bootstrap/Carousel";
import carouselimg from '../../img/homewallpaper_1.jpg'


export const CarouselInicio = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          src={carouselimg}
          className="d-block w-100 h-2"
          alt="Primer Slide"
        />
        <Carousel.Caption>
          <iframe className="pb-5" title='animacion fecha' src="https://embed.lottiefiles.com/animation/107748"></iframe>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
