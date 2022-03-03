import React from "react";
import mike from '../../src/assets/Error.png';
import styled from 'styled-components';

const Error404 = () => {
    return ( 
        <Contenedor>
            <h2>OOPS! LA PAGINA NO HA SIDO ENCONTRADA</h2>
            <p>Debes a ver tomado un enlace erroneo por favor volver a Inicio</p>
            <img src={mike}></img>
        </Contenedor>
     );
}

const Contenedor = styled.div`
    margin-top:120px;
`

 
export default Error404;