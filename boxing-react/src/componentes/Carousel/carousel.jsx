import Carousel from "react-bootstrap/Carousel";
import carouselimg from "../../img/carousel/FondoCarousel2.svg";

//Todo: Corregir imagen no abarca todo el ancho.
export const CarouselInicio = () => {
  return (
    <Carousel className="w-100">
      <Carousel.Item>
        <img
          src={carouselimg}
          className="w-100"
          alt="Primer Slide"
        />
        <Carousel.Caption>
          <iframe
            className="pb-5"
            title="animacion fecha"
            src="https://embed.lottiefiles.com/animation/107748"
          ></iframe>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
