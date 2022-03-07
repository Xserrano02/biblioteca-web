import React from "react";
import originales from '../assets/originales.jpg'
import '../estilos/estiloLibro.css'
import ComentariosVerLibro from "./ComentariosVerLibro";

const VerLibros = () => {
    return ( 
        <div className="Contenedor">

            <div className="informacionLibro">
                <img src={originales}/>

                <div className="informacionBook">
                    <h2>Hacia la extincion</h2>
                    <button>Agregar a favoritos</button>
                    <p>About   El mundo ha sufrido una revuelta. Una nueva especie ha surgido, los ''Strobs'' son asesinos a sangre fría. Este es el enfrentamiento entre dos especies con la mayor inteligencia, una asombrosa capacidad de aprendizaje. Esta es una guerra por la supervivencia.Ciencia Ficción Futurista</p>
                </div>

            </div>
            <div className="divOriginales">
                <h2>Originales</h2>
            </div>

            <button className="btnComenzarLectura">Comenzar Lectura</button>

            <ComentariosVerLibro/>

        </div>
     );
}
 
export default VerLibros;