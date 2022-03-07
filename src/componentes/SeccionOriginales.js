import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const SeccionOriginales = ({originalesSeccion,imagenes}) => {
    return ( 
        <Contenedor>
            <h3>Originales</h3>
            <ContenedorOriginales>
                {originalesSeccion.map((imagen) =>{
                    return(
                        <div>
                            <NavLink to='/libros'><img src={imagen.img}/></NavLink>
                        </div>
                        
                        

                    );
                    
                })}

            </ContenedorOriginales>
            
            <ContenedorCategorias>

                <ContenedorLinks>
                <h3>Categorias originales mas buscadas</h3>

                    <NavLink to='/ciencia-ficcion' className='btn-ciencia'>Ciencia Ficcion</NavLink>
                    <NavLink to='/romance'className='btn-romance'>Romance</NavLink>
                    <NavLink to='/horror' className='btn-horrro'>Horror</NavLink>
                </ContenedorLinks>

                <ContenedorLinksSec>
                <h3>Categorias originales mas buscadas</h3>

                    <NavLink to='/ciencia-ficcion' className='btn-ciencia'>Clasica</NavLink>
                    <NavLink to='/romance'className='btn-romance'>Fantasia</NavLink>
                    <NavLink to='/horror' className='btn-horrro'>Drama</NavLink>
                </ContenedorLinksSec>


            </ContenedorCategorias>


        </Contenedor>

     );
}

const Contenedor =styled.div`
    width:100%;
`
 
const ContenedorOriginales = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    width: 80%;
    margin:30px 10.5%;


    @media screen and (max-width: 414px){
        grid-template-columns: repeat(2, 1fr);
        margin:50px 10%;
        img{
            width: 100%;
            height: 220px;
        }
    }

}
`
const ContenedorCategorias = styled.div`
width:100%;
// background-color: #8c30f5;
display:grid;
grid-template-columns: repeat(2, 1fr);
width:70%;
margin:40px auto;
`

const ContenedorLinks = styled.div`
text-aling:center;
display:grid;
grid-template-rows:  repeat(2, 1fr);
row-gap: 40px;


a{
background: #75E3EA;
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding:20px;
width:50%;
margin: 0 auto; 
text-decoration:none;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 196.19%;
color: #241400;
}


`

const ContenedorLinksSec=styled.div`
text-aling:center;
display:grid;
grid-template-rows:  repeat(2, 1fr);
row-gap: 40px;


a{
background: #A5A6F6;
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding:20px;
width:50%;
margin: 0 auto; 
text-decoration:none;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 196.19%;
color: #241400;
}

`
export default SeccionOriginales;
