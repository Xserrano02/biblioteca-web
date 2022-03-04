import React from "react";
import style from "../estilos/Registrar.module.css"


import { Link, NavLink } from "react-router-dom";
const Registrar = () => {
    return (

        <div>
            
            <br></br>

        
            {/* <form className={style.login}>
            
            
                
                <legend class={style.legend}>Registrarse</legend>
                
                
                <div class={style.input}>
                    <input type="text" placeholder="Nombre" required />
                </div>
                
                <div class={style.input}>
                    <input type="text" placeholder="Apellido" required />
                </div>

                <div class={style.input}>
                    <input type="email" placeholder="Email" required />
                </div>
                
                <div class={style.input}>
                    <input type="password" placeholder="Password" required />
                </div>
                
                <button type="submit" class="submit">Enviar</button>
                
            
            
            </form> */}
        
        <form className={style.login}>
            
            
                
                <legend className={style.legend}>Registrarse</legend>
                
                
                <label className={style.input}>
                <input className={style.controls} type="text" placeholder="Nombre" required/>
                </label>
                
                <label className={style.input}>
                <input className={style.controls} type="text" name="name" placeholder="Apellido" required/>
                </label>

                <label className={style.input}>
                <input className={style.controls} type="email" name="Correo" placeholder="Correo" required/>
                </label>
                
                <label className={style.input}>
                <input className={style.controls} type="password" name="Contraseña" placeholder="Contraseña" required/>
                    
                </label>
                
                {/* <button type="submit" className={style.sumit    }>Enviar</button> */}
                <NavLink to="/#" className={style.sumit}>Enviar</NavLink>
                
            
            
            </form> 
            {/* <Link to="/login" >Iniciar sesion</Link> */}
        

        </div>

        
      );
}
 
export default Registrar;