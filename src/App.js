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
import VerLibros from './componentes/VerLibro';


function App() {
  return (
    <div className="App">

      {/* Componente de menu */}
      <Menu/>

      <main>

        <Routes>
          {/* Todas las rutas */}
            <Route path="*" element={<Error404/>}></Route>
            <Route path="/" element={<Inicio/>}></Route>


            <Route path="/premium" element={<Premium/>}></Route>
            <Route path="/originales" element={<Inicio/>}></Route>

            <Route path="/premium" element={<inicio/>}></Route>

            <Route path="/registrar" element={<Registrar/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/sobre-nosotros" element={<SobreNosotros/>}></Route>

            {/* Rutas de categorias */}
            <Route path='/ciencia-ficcion' element={<inicio/>}></Route>
            <Route path='/romance' element={<inicio/>}></Route>
            <Route path='/horror' element={<inicio/>}></Route>

            <Route path='/libros' element={<VerLibros/>}></Route>
          </Routes>
          <Footer/>
      </main>

      {/* Footer todavia no termiando */}
      
    </div>
  );
}



export default App;
