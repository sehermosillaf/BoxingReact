import React from "react";

import "./footer.css";
import MapLocation from "../mapa/map";

const Footer = () => {
  return (
    <div id="footer" className="main-footer text-center">
      <div className="container">
        <div className="mt-5 pt-5"></div>
        <div className="row">
          {/*columna 1*/}
          <div className="col pt-2">
            <h4>Contacto</h4>
            <ul className="list-unstyled pt-4">
              <li>Dirección: Yungay 3728</li>
              <li id="contacto">Contacto: +569 6347 3789</li>
              <li>Ciudad: Santiago</li>
            </ul>
          </div>
          {/*columna 2*/}
          <div className="col pt-2">
            <h4>Redes Sociales</h4>
            <div className="pt-4">
              <a href="https://www.instagram.com/" className="pt-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                  height="50"
                  width="50"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/" className="px-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                  height="50"
                  width="50"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/" className="pt-5">
                <img
                  src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png"
                  height="50"
                  width="50"
                  alt=""
                />
              </a>
            </div>
          </div>
          {/*columna 3*/}
          <div className="col">
            <h4>Mapa</h4>
            <MapLocation />
          </div>
        </div>
        <div className="row">
          <p className="col-sm text-center">&copy;Derechos Reservados</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
