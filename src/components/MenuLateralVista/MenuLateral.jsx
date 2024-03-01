import '../../Styles/MenuStyle.css'
// import React, { useState } from 'react';

//prueba

import React, { useEffect,useState } from 'react';
import { Descripcion } from '../Tablas/Descripcion'
import { Technology } from '../Tablas/Technology'
import { Knowledge } from '../Tablas/Knowledge'
import { Software } from '../Tablas/Software'
import { TRaining } from '../Tablas/TRaining'
import { Impacts } from '../Tablas/Impacts'
import { Raising } from '../Tablas/Raising'
import { Visibility } from '../Tablas/Visibility'
import { Institucion } from '../Tablas/Institucion'
import { Other } from '../Tablas/Other'

//prueba


var pepe = 0;
export const MenuLateral = ({ onMostrarTabla }) => {

    const [menuClass, setMenuClass] = useState('menu-collapsed');

    const toggleMenu = () => {
        setMenuClass((prevClass) => (prevClass === 'menu-collapsed' ? 'menu-expanded' : 'menu-collapsed'));
        document.querySelector('body').classList.toggle('body-expanded');
    };

//Prueba

// const [isTitleVisible, setIsTitleVisible] = useState(true);
// const [isTitleVisible1, setIsTitleVisible1] = useState(false);
// const [isTitleVisible2, setIsTitleVisible2] = useState(false);
// const [isTitleVisible3, setIsTitleVisible3] = useState(false);
// const [isTitleVisible4, setIsTitleVisible4] = useState(false);
// const [isTitleVisible5, setIsTitleVisible5] = useState(false);
// const [isTitleVisible6, setIsTitleVisible6] = useState(false);
// const [isTitleVisible7, setIsTitleVisible7] = useState(false);
// const [isTitleVisible8, setIsTitleVisible8] = useState(false);
// const [isTitleVisible9, setIsTitleVisible9] = useState(false);

// //1
// let handleClick = (num) => {

    
//     if (num == 1 || pepe == 1) {

//         if (num == 1) {
//             setIsTitleVisible(true);
//           //  var miDiv = document.querySelector(".btn1");

//             // Agrega la clase para cambiar el fondo
//           //  miDiv.classList.add("fondoNegro");
//             console.log("true "  + isTitleVisible );
           
//         } else {
//        //     var miDiv = document.querySelector(".btn1");
//        //     miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible(false);
//             console.log("false")
//         }




//     }
//     if (num == 2 || pepe == 2) {
       
//         if (num == 2) {
//          //   var miDiv = document.querySelector(".btn2");

//             // Agrega la clase para cambiar el fondo
//         //    miDiv.classList.add("fondoNegro");
//         console.log("Este es el segundo ahora" );
//             setIsTitleVisible1(true);
//             setIsTitleVisible(false);
//         } else {
//             setIsTitleVisible1(false);
//        //     var miDiv = document.querySelector(".btn2");

//             // Agrega la clase para cambiar el fondo
//        //     miDiv.classList.remove("fondoNegro");
//         }


//     }
  
//     if (num == 3 || pepe == 3) {
      
//         if (num == 3) {
//        //     var miDiv = document.querySelector(".btn3");
//        //     miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible2(true);
//         } else {
//       //      var miDiv = document.querySelector(".btn3");
//         //    miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible2(false);
           
//         }


//     }
//     if (num == 4 || pepe == 4) {
      
//         if (num == 4) {
//       //      var miDiv = document.querySelector(".btn4");
//        //     miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible3(true);
//         } else {
//       //      var miDiv = document.querySelector(".btn4");
//        //     miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible3(false);
          
//         }
//     }
//     if (num == 5 || pepe == 5) {
      
//         if (num == 5) {
//        //     var miDiv = document.querySelector(".btn5");
//        //     miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible4(true);
//         } else {
//        //     var miDiv = document.querySelector(".btn5");
//       //      miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible4(false);
          
//         }
//     }
//     if (num == 6 || pepe == 6) {
        
//         if (num == 6) {
//        //     var miDiv = document.querySelector(".btn6");
//        //     miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible5(true);
//         } else {
//        //     var miDiv = document.querySelector(".btn6");
//        //     miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible5(false);
           
//         }


//     }
//     if (num == 7 || pepe == 7) {
       
//         if (num == 7) {
//       //      var miDiv = document.querySelector(".btn7");
//        //     miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible6(true);
//         } else {
//       //      var miDiv = document.querySelector(".btn7");
//       //      miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible6(false);
           
//         }
//     }
//     if (num == 8 || pepe == 8) {
       
//         if (num == 8) {
//         //    var miDiv = document.querySelector(".btn8");
//         //    miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible7(true);
//         } else {
//        //     var miDiv = document.querySelector(".btn8");
//         //    miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible7(false);
         
//         }
//     }
//     if (num == 9 || pepe == 9) {
   
//         if (num == 9) {
//        //     var miDiv = document.querySelector(".btn9");
//        //     miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible8(true);
//         } else {
//             setIsTitleVisible8(false);
//        //     var miDiv = document.querySelector(".btn9");
//        //     miDiv.classList.remove("fondoNegro");
//         }
//     }
//     if (num == 10 || pepe == 10) {
       
//         if (num == 10) {
//        //     var miDiv = document.querySelector(".btn10");
//        //     miDiv.classList.add("fondoNegro");
//             setIsTitleVisible(false);
//             setIsTitleVisible9(true);
//         } else {
//         //    var miDiv = document.querySelector(".btn10");
//         //    miDiv.classList.remove("fondoNegro");
//             setIsTitleVisible9(false);
          
//         }
//     }

//     pepe = num;

//     //  }

// }
// useEffect(() => {
//     // Función que quieres ejecutar al cargar la página o montar el componente
   
//     // Agrega aquí la lógica que deseas ejecutar

//     // Por ejemplo, simulemos un clic en un botón al cargar la página
//     handleClick(1);
//   }, []);



//Prueba




    return (

        <div id='sidemenu' className={menuClass}>
            <div id='header'>
                <div id='title'><span>MyKpis</span> </div>
                <div id='menu-btn' onClick={toggleMenu}>
                    <div className='btn-hamburger'></div>
                    <div className='btn-hamburger'></div>
                    <div className='btn-hamburger'></div>
                </div>
            </div>

            <div id='profile'>
                <div id='photo'><img src="src\components\Img\Kpis.png" alt="" /></div>
                <div id='name'><span>Welcome:OA</span></div>
            </div>

            <div id='menu-items'>
                <div className='item'> 
                    <a href="#" onClick={() => onMostrarTabla(1)} >
                        <div className='icon'><img id='germopla' src="src\components\Img\germoplasmanew.png" alt="" /></div>
                        <div className='title'><span>Germplasm-into-use</span></div>
                    </a>
                </div>
                <div className='item separator'></div>

                <div className='item'>
                    <a href="#"  onClick={() => onMostrarTabla(2)} >
                        <div className='icon'><img id='Techoology' src="src\components\Img\socioe.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Techology and Socioeconomics - into - use</span></div>
                    </a>
                </div>


                <div className='item separator'></div>

                <div className='item'>
                    <a href="#" >
                        <div className='icon'><img id='Conoci' src="src\components\Img\Conocimiento.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Knowledge-into-use</span></div>
                    </a>
                </div>

                <div className='item separator'></div>

                <div className='item'>
                    <a href="#">
                        <div className='icon'><img id='Software' src="src\components\Img\data.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Software and Data-into-use</span></div>
                    </a>
                </div>

                <div className='item separator'></div>

                <div className='item'>
                    <a href="#">
                        <div className='icon'><img id='People' src="src\components\Img\people.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>People-trained</span></div>
                    </a>
                </div>
                <div className='item separator'></div>

                <div className='item'>
                    <a href="#">
                        <div className='icon'><img id='Outcome' src="src\components\Img\Impcat.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Outcome/Impacts achieved</span></div>
                    </a>
                </div>

                <div className='item separator'></div>

                <div className='item'>
                    <a href="#">
                        <div className='icon'><img id='Fund' src="src\components\Img\project.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Fund raising and Projects management</span></div>
                    </a>
                </div>

                <div className='item separator'></div>

                <div className='item'>
                    <a href="#">
                        <div className='icon'><img id='Visibility' src="src\components\Img\visibility.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Visibility</span></div>
                    </a>
                </div>
                <div className='item separator'></div>

                <div className='item'>
                    <a href="#">
                        <div className='icon'><img id='Institution' src="src\components\Img\insi.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Institution</span></div>
                    </a>
                </div>
                <div className='item separator'></div>

                <div className='item'>
                    <a href="#">
                        <div className='icon'><img id='Other services and products delivered to users' src="src\components\Img\delivere.png" alt="" style={{ width: '100%', left: '1%' }} /></div>
                        <div className='title'><span>Other services and products delivered to users</span></div>
                    </a>
                </div>
            



            </div>
            
<div>



</div>
{/* <Descripcion isVisible={isTitleVisible} />
<Technology isVisible={isTitleVisible1} />
<Knowledge isVisible={isTitleVisible2} />
<Software isVisible={isTitleVisible3}/>
<TRaining isVisible={isTitleVisible4}/>
<Impacts isVisible={isTitleVisible5}/>
<Raising isVisible={isTitleVisible6}/>
<Visibility isVisible={isTitleVisible7}/>
<Institucion isVisible={isTitleVisible8}/>
<Other isVisible={isTitleVisible9}/>
 */}



        </div>



    )


}

