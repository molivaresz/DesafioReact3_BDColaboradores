import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const Listado = (props) => {
  const [colaboradores, setColaboradores] = useState(props.Bcolaboradores)
  const [encabezado, setEncabezado] = useState(props.EColaboradores)

  return (
    <>
    <div>Listado</div>

    <table responsive striped bordered hover variant="dark" >
      <thead>
        <tr>
        {
      encabezado.map((tituloEnca) => 
      <th key={tituloEnca.id}>{tituloEnca.titulo}</th>
      )      
    }
        </tr>
      </thead>
      <tbody>
        
        {
      colaboradores.map((colaborador) => 
      <tr>
      <td key={colaborador.id-colaborador.nombre}>{colaborador.nombre}</td> 
      <td key={colaborador.id-colaborador.correo}>{colaborador.correo}</td>
      <td key={colaborador.id-colaborador.edad}>{colaborador.edad}</td> 
      <td key={colaborador.id-colaborador.cargo}>{colaborador.cargo}</td>
      <td key={colaborador.id-colaborador.telefono}>{colaborador.telefono}</td> 
      
      </tr>
      )  
    }

    </tbody>
    </table>

    </>
  )
}

export default Listado