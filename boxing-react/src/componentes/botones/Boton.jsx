import React from "react";
import './boton.css';

const estilos = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid"
];

const tamaño = ["btn--medium", "btn--small"];

export const Boton = ({children, type, onClick, buttonStyle, buttonSize})  => {

    const checkbtnStyle = estilos.includes(buttonStyle) ? buttonStyle: estilos[0];

    const checkbtnSize = tamaño.includes(buttonSize) ? buttonSize: estilos[0];

    //children es lo que va dentro de la etiqueta boton
    return(
        <button
            className={`btn ${checkbtnSize} ${checkbtnSize}`} 
            onClick={onClick} type={type}>
            {children}
        </button>
    );
}