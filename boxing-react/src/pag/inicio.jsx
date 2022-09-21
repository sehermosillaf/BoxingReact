import { Disciplinas } from "./disciplinas"
import { CarouselInicio } from "../componentes/Carousel/carousel"
import Footer from "../componentes/Footer/footer";

export const Inicio = () => {
    return (
   <div>
    <CarouselInicio/>
    <Disciplinas/>
    <Footer/>
   </div>
    );
}