import React from "react";

import './footer.css';
import MapLocation from '../mapa/map'

const Footer = () => {
    return(
        <div className="main-footer text-center">
            <div className="container">
                <MapLocation/>
                <div className="row">
                {/*columna 1*/}
                    <div className="col">
                        <h4>Footer 1</h4>
                        <ul className="list-unstyled">
                            <li>numero de telefono</li>
                            <li>Ciudad</li>
                            <li>direccion</li>
                        </ul>
                    </div>
                {/*columna 2*/}
                <div className="col">
                    <h4>Footer 2</h4>
                    <ul className="list-unstyled">
                        <li>Texto</li>
                        <li>Texto2</li>
                        <li>Texto3</li>
                    </ul>
                </div>
                {/*columna 3*/}
                <div className="col">
                    <h4>Footer 3</h4>
                    <ul className="list-unstyled">
                        <li>Texto</li>
                        <li>Texto2</li>
                        <li>Texto3</li>
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