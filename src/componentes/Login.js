import React from "react";
import style from "../estilos/Registrar.module.css"
import { Link, NavLink } from "react-router-dom";

const Login = () => {
    return ( <div>

<br></br>
<form className={style.login}>
            
            
                
                <legend className={style.legend}>Login</legend>
                
                
                

                <label className={style.input}>
                <input className={style.controls} type="email" name="Correo" placeholder="Correo" required/>
                </label>
                
                <label className={style.input}>
                <input className={style.controls} type="password" name="Contraseña" placeholder="Contraseña" required/>
                    
                </label>
                
                {/* <button type="submit" className={style.sumit    }>Enviar</button> */}
                <NavLink to="/#" className={style.sumit}>Enviar</NavLink>
                
            
            
            </form> 


    </div> );
}
 
export default Login;