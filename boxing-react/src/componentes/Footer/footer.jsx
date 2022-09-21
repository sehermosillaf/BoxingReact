import React from "react";

import './footer.css';
import MapLocation from '../mapa/map'

const Footer = () => {
    return(
        <div id="footer" className="main-footer text-center">
            <div className="container">
                <div className="mt-5 pt-5">
                <MapLocation/>
                </div>
                <div className="row">
                {/*columna 1*/}
                    <div className="col">
                        <h4>Contacto</h4>
                        <ul className="list-unstyled">
                            <li id="contacto">+569 6347 3789</li>
                        </ul>
                    </div>
                {/*columna 2*/}
                <div className="col">
                    <h4>Direccion</h4>
                    <ul className="list-unstyled">
                        <li>Yungay, Santiago</li>
                    </ul>
                </div>
                {/*columna 3*/}
                <div className="col">
                    <h4>Redes Sociales</h4>
                    <ul className="list-unstyled">
                        <a href="https://www.instagram.com/">Instagram</a>
                    </ul>
                </div>
                </div>
                <div className="row">
                    <p className="col-sm text-center">
                    &copy;Derechos Reservados
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;