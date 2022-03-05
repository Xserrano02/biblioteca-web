import React from "react";
import styled from "styled-components";
import fondo from '../../src/assets/completoFondo.png'
import librosPortada from '../../src/assets/LibroImagen.jpg';
import SeccionOriginales from "./SeccionOriginales";
import originales from '../assets/originales.jpg'


const Menu = () => {

    const imagenes =[
        {img:librosPortada,Autor:'Ana Frank', Titulo:'El diario de Ana Frank'},
        {img:librosPortada,Autor:'Ana Frank', Titulo:'El diario de Ana Frank'},
        {img:librosPortada,Autor:'Ana Frank', Titulo:'El diario de Ana Frank'},
        {img:librosPortada,Autor:'Ana Frank', Titulo:'El diario de Ana Frank'}

      ]

      const originalesSeccion =[
        {img:originales},
        {img:originales},
        {img:originales},
        {img:originales},
        {img:originales},
        {img:originales},
        {img:originales},
        {img:originales}
      ]



    return ( 
        <Contenedor>

            
            <div className="contenedorFondo">
                <img src={fondo}></img>
            </div>
            
            <h2>Premium</h2>

            <ContenedorPremium>
                
                {imagenes.map((imagen)=>{
                    return(
                        <Libros>
                            <img src={imagenes[0].img}/>
                            <h3>{imagen.Titulo}</h3>
                            <p>{imagen.Autor}</p>
                            <button>Leer</button>
                        </Libros>
                    );
                })}
            </ContenedorPremium>


            <SeccionOriginales originalesSeccion={originalesSeccion} imagenes={imagenes}/>
        </Contenedor>

     );
}

const Contenedor = styled.div`
    max-width: 2000px;
    img{
        width:100%;
        height: 500px;
    }
    @media screen and (max-width: 414px){
        img{
            width:100%;
            height: 300px;
        }
      }
`

const ContenedorPremium = styled.div`
    width:100%;
    display: flex;
    justify-content:center ;
    align-items: center;
    
    padding:20px 0;
    flex-wrap:wrap;

    @media screen and (max-width: 414px){
        display:grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 20px;
        column-gap:10px ;
      }
    
      @media screen and (max-width: 375px){
        display:grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 20px;
      }

`

const Libros = styled.div`  
background: #FFFFFF;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
margin-left:20px;
width:20%;

img{
    width:100%;
    height: 300px;
}

button{
    width: 103.18px;
    height: 29px;
    left: 410.46px;
    top: 1182px;
    margin-bottom: 20px;
    color:#fff;
    border:none;
    
    /* Brand / Purple */
    
    background: #8C30F5;
    filter: blur(8px);
    border-radius: 3px;
}

@media screen and (max-width: 414px){
    margin:0 auto;
    width:80%;
    img{
        width:100%;
        height: 200px;
    }
  }

  @media screen and (max-width: 375px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 20px;
  }
`
 
export default Menu;