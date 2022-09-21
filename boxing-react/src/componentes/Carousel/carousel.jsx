import Carousel from "react-bootstrap/Carousel";
import carouselimg from '../../img/homewallpaper.jpg'
export const CarouselInicio = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-20
        "
          src={carouselimg}
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
