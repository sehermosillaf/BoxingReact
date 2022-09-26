import { Disciplinas } from "./disciplinas"
import { CarouselInicio } from "../componentes/Carousel/carousel"

import CardGroup from "react-bootstrap/CardGroup";
import { CardComponent } from "../componentes/cards/card-comp";

export const Inicio = () => {
    return (
        <div>
            <CarouselInicio />
            <div class="container">
                <div class="row text text-left">
                    <div class="col">
                        <img src="https://img.europapress.es/fotoweb/fotonoticia_20171026080141_420.jpg" alt="boxeo" width="400" height="300" 
                        style={{borderRadius: '10%'}}/>
                    </div>
                    <div class="col text text-left">
                        <CardGroup className=" mt-5 " >
                            <CardComponent
                                titulo="Bienvenido al Gimnasio React Boxing"
                                desc="Aqui encontraras a los mejores entrenadores para especializarte en el deporte del boxeo"
                            />
                        </CardGroup>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <CardGroup className=" mt-5">
                            <CardComponent
                                titulo="Entrenamiento de alto impacto"
                                desc="Buscamos que a traves del entrenamiento, logres tu maximo potencial"
                            />
                        </CardGroup>
                    </div>
                    <div class="col">
                        <iframe width="400" height="300" src="https://www.youtube.com/embed/Z8H2TfsoJrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        style={{borderRadius: '10%'}}></iframe>
                    </div>
                    <h1 className="mt-5 text text-center">Experiencias de usuarios</h1>
                </div>
                <div class="row">
                    <div class="col">
                        <img width="400" height="300" src="https://media.revistagq.com/photos/5db2da9390f9460008ed9d84/4:3/w_4379,h_3284,c_limit/GettyImages-500671490.jpg" alt="boxeo" 
                        style={{borderRadius: '50%'}}/>
                    </div>
                    <div class="col">
                        <CardGroup className=" mt-5">
                            <CardComponent
                                titulo="Gonzalo Ortega"
                                desc="La experiencia en el gimnasio es bastante agradable y los instructores tienen bastante conocimientos, recomendado venir a entrenar"
                            />
                        </CardGroup>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <CardGroup className=" mt-5">
                            <CardComponent
                                titulo="Angela Gutierrez"
                                desc="Despues de buscar varios gimnasios, encontre este y actualmente ha sido la mejor experiencia, tanto en el trato de los instructores como de las instalaciones"
                            />
                        </CardGroup>
                    </div>
                    <div class="col">
                        <img width="400" height="300" src="https://i.linio.com/p/d1ad754be3f0f7071d76aa7cbd93c081-product.jpg" alt="boxeo" style={{borderRadius: '50%'}}/>
                    </div>
                </div>
            </div>
            <br />
            <h1 className="text text-center">Disciplinas</h1>
            <Disciplinas></Disciplinas>
        </div>
    );
}