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
          <h3>Boxeo</h3>
          <p>React Boxing es un ambiente para entrenar </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
