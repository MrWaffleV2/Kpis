// import { useState } from 'react'
import {Header} from "./components/Tablas/Header"
import './App.css'
import { StaffInfo } from './components/Tablas/StaffInfo'
// import { Catalogo } from './components/Catalogo'
import { Var } from './components/Tablas/Var'
import { MenuLateral } from './components/MenuLateralVista/MenuLateral'
//prueba

import React, { useEffect,useState } from 'react';
import { Descripcion } from './components/Tablas/Descripcion'
import { Technology } from './components/Tablas/Technology'
import { Knowledge } from './components/Tablas/Knowledge'
import { Software } from './components/Tablas/Software'
import { TRaining } from './components/Tablas/TRaining'
import { Impacts } from './components/Tablas/Impacts'
import { Raising } from './components/Tablas/Raising'
import { Visibility } from './components/Tablas/Visibility'
import { Institucion } from './components/Tablas/Institucion'
import { Other } from './components/Tablas/Other'
//prueba





function App() {
 //prueba

 const [mostrarTabla, setMostrarTabla] = useState(null);



 const mostrarOcultarTabla = (namber) => {
   setMostrarTabla(namber);
   console.log("Test1 " + mostrarTabla)
 };

 //prueba




  return (
    <>
    <Var/>
    <MenuLateral/>

    
     <Header/>
     <StaffInfo/>
     <div id="des">
      < MenuLateral onMostrarTabla = {mostrarOcultarTabla} />
      {mostrarTabla === 1 && <Descripcion  />}
    </div>
   
      <div id="tec" >
      <MenuLateral onMostrarTabla = {mostrarOcultarTabla}/>
      {mostrarTabla === 2 && <Technology />}
    </div>
    
    


    
    
    </>
  )
}

export default App
