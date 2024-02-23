import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

const Listado = (props) => {

    return (
        <>
        <Table responsive striped bordered hover variant="info" >
            <thead>
                <tr>
                    {
                    props.EColaboradores.map((tituloEnca) => 
                    <th key={tituloEnca.id}>{tituloEnca.titulo}</th>
                    )      
                    }
                </tr>
                </thead>
                <tbody>
                    {
                    props.Bcolaboradores.map((colaborador) => 
                    <tr key={colaborador.id}>
                        <td key={colaborador.nombre}>{colaborador.nombre}</td> 
                        <td key={colaborador.correo}>{colaborador.correo}</td>
                        <td key={colaborador.edad}>{colaborador.edad}</td> 
                        <td key={colaborador.cargo}>{colaborador.cargo}</td>
                        <td key={colaborador.telefono}>{colaborador.telefono}</td> 
                    </tr>
                    )  
                    }
            </tbody>
        </Table>
        </>
    )
}

export default Listado