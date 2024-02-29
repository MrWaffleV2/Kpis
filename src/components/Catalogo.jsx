
import React, { useState,useEffect } from 'react';
import { Descripcion } from './Descripcion'
import { Technology } from './Technology'
import { Knowledge } from './Knowledge'
import { Software } from './Software'
import { TRaining } from './TRaining'
import { Impacts } from './Impacts'
import { Raising } from './Raising'
import { Visibility } from './Visibility'
import { Institucion } from './Institucion'
import { Other } from './Other'




import './style.css'
var pepe = 0;
export const Catalogo = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(true);
    const [isTitleVisible1, setIsTitleVisible1] = useState(false);
    const [isTitleVisible2, setIsTitleVisible2] = useState(false);
    const [isTitleVisible3, setIsTitleVisible3] = useState(false);
    const [isTitleVisible4, setIsTitleVisible4] = useState(false);
    const [isTitleVisible5, setIsTitleVisible5] = useState(false);
    const [isTitleVisible6, setIsTitleVisible6] = useState(false);
    const [isTitleVisible7, setIsTitleVisible7] = useState(false);
    const [isTitleVisible8, setIsTitleVisible8] = useState(false);
    const [isTitleVisible9, setIsTitleVisible9] = useState(false);

    //1
    let handleClick = (num) => {

        
        if (num == 1 || pepe == 1) {

            if (num == 1) {
                setIsTitleVisible(true);
                var miDiv = document.querySelector(".btn1");

                // Agrega la clase para cambiar el fondo
                miDiv.classList.add("fondoNegro");
                
               
            } else {
                var miDiv = document.querySelector(".btn1");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible(false);
               
            }




        }
        if (num == 2 || pepe == 2) {
           
            if (num == 2) {
                var miDiv = document.querySelector(".btn2");

                // Agrega la clase para cambiar el fondo
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible1(true);
                setIsTitleVisible(false);
            } else {
                setIsTitleVisible1(false);
                var miDiv = document.querySelector(".btn2");

                // Agrega la clase para cambiar el fondo
                miDiv.classList.remove("fondoNegro");
            }


        }
      
        if (num == 3 || pepe == 3) {
          
            if (num == 3) {
                var miDiv = document.querySelector(".btn3");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible2(true);
            } else {
                var miDiv = document.querySelector(".btn3");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible2(false);
               
            }


        }
        if (num == 4 || pepe == 4) {
          
            if (num == 4) {
                var miDiv = document.querySelector(".btn4");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible3(true);
            } else {
                var miDiv = document.querySelector(".btn4");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible3(false);
              
            }
        }
        if (num == 5 || pepe == 5) {
          
            if (num == 5) {
                var miDiv = document.querySelector(".btn5");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible4(true);
            } else {
                var miDiv = document.querySelector(".btn5");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible4(false);
              
            }
        }
        if (num == 6 || pepe == 6) {
            
            if (num == 6) {
                var miDiv = document.querySelector(".btn6");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible5(true);
            } else {
                var miDiv = document.querySelector(".btn6");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible5(false);
               
            }


        }
        if (num == 7 || pepe == 7) {
           
            if (num == 7) {
                var miDiv = document.querySelector(".btn7");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible6(true);
            } else {
                var miDiv = document.querySelector(".btn7");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible6(false);
               
            }
        }
        if (num == 8 || pepe == 8) {
           
            if (num == 8) {
                var miDiv = document.querySelector(".btn8");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible7(true);
            } else {
                var miDiv = document.querySelector(".btn8");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible7(false);
             
            }
        }
        if (num == 9 || pepe == 9) {
       
            if (num == 9) {
                var miDiv = document.querySelector(".btn9");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible8(true);
            } else {
                setIsTitleVisible8(false);
                var miDiv = document.querySelector(".btn9");
                miDiv.classList.remove("fondoNegro");
            }
        }
        if (num == 10 || pepe == 10) {
           
            if (num == 10) {
                var miDiv = document.querySelector(".btn10");
                miDiv.classList.add("fondoNegro");
                setIsTitleVisible(false);
                setIsTitleVisible9(true);
            } else {
                var miDiv = document.querySelector(".btn10");
                miDiv.classList.remove("fondoNegro");
                setIsTitleVisible9(false);
              
            }
        }

        pepe = num;

        //  }

    }
    useEffect(() => {
        // Función que quieres ejecutar al cargar la página o montar el componente
       
        // Agrega aquí la lógica que deseas ejecutar
    
        // Por ejemplo, simulemos un clic en un botón al cargar la página
        handleClick(1);
      }, []);



    return (


<div id='contenedormax'>
        <div id='Catalogo'>
<table>
    <thead>
            <tr id='Catlg'>
                <th id='cat' >
                    <a href='#' onClick={() => handleClick(1)} className = 'btn1' > 1. Germplasm-into-use </a>

                </th>
                <th id='cat'>
                    <a href='#' onClick={() => handleClick(2)} className = 'btn2'>  2. Techology and Socioeconomics-into-use </a>

                </th>
            </tr>
            <tr id='Catlg' >
                <th id='cat'>
                    <a href='#' onClick={() => handleClick(3)} className = 'btn3'> 3. Knowledge-into-use </a>

                </th>
                <th id='cat'>

                    <a href='#' onClick={() => handleClick(4)} className = 'btn4'> 4. Software and Data-into-use </a>
                </th>
            </tr>
            <tr id='Catlg' >
                <th id='cat'>

                    <a href='#' onClick={() => handleClick(5)} className = 'btn5'> 5. People-trained </a>
                </th>
            
            
                <th id='cat'>

                    <a href='#' onClick={() => handleClick(6)} className = 'btn6'>  6. Outcome/Impacts achieved </a>
                </th>
            </tr>
            <tr id='Catlg'>
                <th id='cat'>

                    <a href='#' onClick={() => handleClick(7)} className = 'btn7'> 7. Fund raising and Projects management </a>
                </th>
                <th id='cat' >

                    <a href='#' onClick={() => handleClick(8)} className = 'btn8'> 8. Visibility </a>
                </th>
            </tr>
            <tr id='Catlg'>
                <th id='cat' >

                    <a href='#' onClick={() => handleClick(9)} className = 'btn9'> 9. Institution</a>
                </th>

                <th id='cat' >

                    <a href='#' onClick={() => handleClick(10)} className = 'btn10'> 10. Other services and products delivered to users </a>
                </th>

            </tr>
            </thead>
     </table>


          
        </div>

        <div id='separar'>

<Descripcion isVisible={isTitleVisible} />
<Technology isVisible={isTitleVisible1} />
<Knowledge isVisible={isTitleVisible2} />
<Software isVisible={isTitleVisible3}/>
<TRaining isVisible={isTitleVisible4}/>
<Impacts isVisible={isTitleVisible5}/>
<Raising isVisible={isTitleVisible6}/>
<Visibility isVisible={isTitleVisible7}/>
<Institucion isVisible={isTitleVisible8}/>
<Other isVisible={isTitleVisible9}/>

</div>



     </div>   
    )
}
