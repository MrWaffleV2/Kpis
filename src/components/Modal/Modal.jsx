
import { useState } from 'react'
import './Modal.css'
import datosjson from '../datosjson.json';
import datosjson2 from '../Json/Datos2.json';
import datosjson3 from '../Json/Datos3.json';
import datosjson4 from '../../../src/Data.json';


export const Modal = ({ isOpen, setPopupOpen }) => {
  const [options] = useState(datosjson);
  const [options2] = useState(datosjson2);
  const [options3] = useState(datosjson3);
  const [options4] = useState(datosjson4);

  const [datos, setDatos] = useState(datosjson4);


  const insertarDatos = () => {
    console.log("Se inserto");
    const nuevoDato = { id: datos.length + 1, nombre: 'Nuevo Nombre', edad: 25 };
    setDatos([...datos, nuevoDato]);
  };

  function cerrar() {
    console.log("aqui estou");
    var pap = document.getElementById("pop");
    pap.style.display = 'none';
    setPopupOpen(false);

  }


  return (
    <div id='pop' className='modal' style={{ display: isOpen ? 'block' : 'none' }}>

      <div className='overlay'></div>
      <div className='modal-content'>

        <button id="Cerrar" onClick={cerrar}>X</button>

        <h2> New Code Line</h2>
        <p>DEFINITION</p>
        <p>Number of maize or wheat germplasm where you were involved in their development and that were tested this year with more than 5 partners.</p>
        <p>COMMON ERRORS:</p>
        <p>Do not include lines that were only evaluated in your own nurseries or trials or that did not go to at least 5 partners for evaluation</p>
        <p>COMMENTS ON ATTRIBUTION:</p>
        <p>Attribution refers to your role in developing these germplasm.</p>
        <p></p>
        <p>New KPI Coded Line</p>
        <p></p>
        <p>Complete the form. Make sure to enter all required fields.</p>
        <div className='contenedorform'>
          <form action="/tu-accion" method="post">
            <table id='pruebas'>
              <thead>
                <tr>
                  <th>Year</th>
                  <td>
                    <label htmlFor="opciones">Selecciona una opción:</label>
                    <select id="opciones" name="opciones">
                      {options.map((option) => (
                        <option key={option.id} value={option.valor}>{option.texto}</option>
                      ))}
                    </select>
                  </td>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>CRP</th>
                  <td>
                    <label htmlFor="opciones">Selecciona una opción:</label>
                    <select id="opciones" name="opciones">
                      {options2.map((option) => (
                        <option key={option.id} value={option.valor}>{option.texto}</option>
                      ))}
                    </select>

                  </td>
                </tr>
              </tbody>
            </table>
            <table id='pruebas'>
              <thead>
                <tr>
                  <th>
                    Type Of Coded*</th>
                  <td>
                    <label htmlFor="opciones">Selecciona una opción:</label>
                    <select id="opciones" name="opciones">
                      {options3.map((option) => (
                        <option key={option.id} value={option.valor}>{option.texto}</option>
                      ))}
                    </select>
                  </td>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
Number Of Coded Lines*</th>
                  <td>
                   <input type="text" placeholder='Required'  />
                 
                  </td>
                </tr>
              </tbody>
            </table>
          </form >
          <button onClick={insertarDatos}>insertarDatos</button>
        </div>
      </div>

    </div>
  )
}

export default Modal;