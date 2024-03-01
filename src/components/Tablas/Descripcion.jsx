
import './style.css';
import React from 'react';
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import data from "../../Data.json";
import Maize from "../../Maize.json";
import { useState, useEffect } from 'react';
import Popup from "../Modal/Modal";
import App from "../../App";

export const Descripcion = () => {

  const [popupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    console.log("cerrar 1");
    setPopupOpen(true);

  };

  const handleClosePopup = () => {
    console.log("cerrar");
    setPopupOpen(false);
  };

  const columns = [
    {
      header: "ID",
      accessorKey: 'id'
    },
    {
      header: "Year",
      accessorKey: 'name'
    },
    {
      header: "CRP",
      accessorKey: 'lastname'
    }
    ,
    {
      header: "Other CRP",
      accessorKey: 'email'
    },
    {
      header: "Type of Coded",
      accessorKey: 'Coded'
    },
    {
      header: "Number Of Coded Lines",
      accessorKey: 'CodedLines'
    },
    {
      header: "Number of Partners this line was sent to",
      accessorKey: 'Partners'
    },
    {
      header: "Percentage of Attribution",
      accessorKey: 'Attribution'
    },
    {
      header: "Attachment",
      accessorKey: 'attachment'
    },
    {
      header: "Comment",
      accessorKey: 'Comment'
    }

  ]


  const test = [
    {
      header: "ID",
      accessorKey: 'id'
    },
    {
      header: "Year",
      accessorKey: 'year'
    },

    {
      header: "crp",
      accessorKey: 'crp'
    },

    {
      header: "othercrp",
      accessorKey: 'othercrp'
    },

    {
      header: "cml",
      accessorKey: 'cml'
    },

    {
      header: "percentaje",
      accessorKey: 'percentaje'
    },
    {
      header: "Comment",
      accessorKey: 'Comment'
    }


  ]








  const [sorting, setSorting] = useState([])
  const [sortings, setSorting1] = useState([])
  const [filtering, setfiltering] = useState()
  const [filtering1, setfiltering1] = useState()


  const table = useReactTable({
    data: data, columns: columns, getCoreRowModel:
      getCoreRowModel(), getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter: filtering
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setfiltering
  });


  const table2 = useReactTable({
    data: Maize, columns: test, getCoreRowModel:
      getCoreRowModel(), getSortedRowModel: getSortedRowModel(),
    state: {
      sortings,
      globalFilter: filtering1
    },
    onSortingChange1: setSorting1,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setfiltering1
  });


  //control de botones
  var tabla1 = '';
  var tabla2 = ''
  useEffect(() => {
    // Función que quieres ejecutar al cargar la página o montar el componente

    // Agrega aquí la lógica que deseas ejecutar
    tabla1 = document.getElementById("tablagerm");
    tabla2 = document.getElementById("tablamaize");
    // Por ejemplo, simulemos un clic en un botón al cargar la página
    tabla2.style.display = 'none';
  }, []);


  function boton1() {

    tabla1.style.display = 'block';
    tabla2.style.display = 'none';

  }
  function boton2() {

    tabla1.style.display = 'none';
    tabla2.style.display = 'block';

  }
  function prueba() {
    tabla1 = document.getElementById("tablagerm");
    tabla2 = document.getElementById("tablamaize");

  }



  return (

    <div id='tabla' >

      <h1>1. Germplasm-into-use</h1>
      <div>
        <div id='boton1' class="btn-1" >
          <a onClick={boton1}><span>Code Line</span></a>
          <a onClick={boton2}><span>CIMMYT Maize Line</span></a>
          <a onClick={boton2}><span>Germplasm Characterized On Molecular Level</span></a>
          <a onClick={boton2}><span>Germplasm Characterized On Phenotypic Level</span></a>
          <a onClick={boton2}><span>Breeder Seed Produced</span></a>
          <a onClick={boton2}><span>Seed Shipment</span></a>
          <a onClick={boton2}><span>CIMMYT Maize Line</span></a>

        </div>

      </div>
      <p>This is a list of seed shipment.</p>

      <div id='tablagerm'>
        <input id='filtro' type="text" value={filtering} onChange={e => setfiltering(e.target.value)}>
        </input>
        <button id='pepe' onClick={handleButtonClick}>click</button>
        <Popup isOpen={popupOpen} setPopupOpen={setPopupOpen}

        />


        <table id='autotable' onClick={prueba()}>

          <thead>
            {
              table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {
                    headerGroup.headers.map(header => (
                      <th key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >

                        {flexRender(header.column.columnDef.header, header.getContext())
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}  >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>

            ))}
          </tbody>

        </table>


      </div>

      <div id='tablamaize' >
        <input id='filtro' type="text" value={filtering1} onChange={e => setfiltering1(e.target.value)}>

        </input>


        <table id='autotable' >
          <thead>
            {
              table2.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {
                    headerGroup.headers.map(header => (
                      <th key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody>
            {table2.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>

            ))}
          </tbody>

        </table>


      </div>





    </div>

  )
}  