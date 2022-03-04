import React from 'react';
import './App.css';
import Error404 from './componentes/Error404';
import Inicio from './componentes/Inicio'
import {Route, Routes} from 'react-router-dom'
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import Registrar from './componentes/Registrar';
import Login from './componentes/Login';
import Premium from './componentes/Premium';
import SobreNosotros from './componentes/SobreNosotros';


function App() {
  return (
    <div className="App">

      {/* Componente de menu */}
      <Menu/>

      <main>
        {/* Aqui esta donde cargaran todas las paginas  */}
        <Routes>
          {/* Todas las rutas estan fincionando pero llevan todas a inicio, la primera lleva a un error 404 y inicio,
          para agregar mas solo es de agregar el componente */}
            <Route path="*" element={<Error404/>}></Route>
            <Route path="/" element={<Inicio/>}></Route>

            {/*para agregar mas links tienen que remplazar la etiqueta inicio y agregar
            el nombre de su componente pero primero */}
            <Route path="/premium" element={<Premium/>}></Route>
            <Route path="/originales" element={<Inicio/>}></Route>

            <Route path="/premium" element={<inicio/>}></Route>

            <Route path="/registrar" element={<Registrar/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/sobre-nosotros" element={<SobreNosotros/>}></Route>

          </Routes>
          {/* <Footer/> */}
      </main>

      {/* Footer todavia no termiando */}
      
    </div>
  );
}



export default App;
