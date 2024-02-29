// import { useState } from 'react'
import {Header} from "./components/Header"
import './App.css'
import { StaffInfo } from './components/StaffInfo'
// import { Catalogo } from './components/Catalogo'
import { Var } from './components/Var'
import { MenuLateral } from './components/MenuLateralVista/MenuLateral'
//prueba

import React, { useEffect,useState } from 'react';
import { Descripcion } from '../src/components/Descripcion'
import { Technology } from '../src/components/Technology'
import { Knowledge } from '../src/components/Knowledge'
import { Software } from '../src/components/Software'
import { TRaining } from '../src/components/TRaining'
import { Impacts } from '../src/components/Impacts'
import { Raising } from '../src/components/Raising'
import { Visibility } from '../src/components/Visibility'
import { Institucion } from '../src/components/Institucion'
import { Other } from '../src/components/Other'
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
