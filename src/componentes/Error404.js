import React from "react";
import mike from '../../src/assets/Error.png';

const Error404 = () => {
    return ( 
        <div>
            <h2>OOPS! LA PAGINA NO HA SIDO ENCONTRADA</h2>
            <p>Debes a ver tomado un enlace erroneo por favor volver a Inicio</p>
            <img src={mike}></img>
        </div>
     );
}
 
export default Error404;