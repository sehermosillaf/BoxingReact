import Carousel from "react-bootstrap/Carousel";
import carouselimg from '../../img/homewallpaper_1.jpg';

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
          <h3 className='pb-5'>Entrena con nosotros!</h3>
          <iframe title='a' src="https://embed.lottiefiles.com/animation/109160"></iframe>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
