import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './Components/Buscador';
import { BaseColaboradores } from './assets/BaseColaboradores';
import { EnColaboradores } from './assets/EnColaboradores';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

function App() {
  const [msgIni, setMsgini] = useState('Favor, completar los campos para registrarse')
  const [msgexito, setMsgexito] = useState('El registro ha sido exitoso')
  const [msgerror1, setMsgerror1] = useState('Todos los campos son obligatorios')
  const [colaboradores, setColaboradores] = useState([])
  const [encabezado, setEncabezado] = useState([])
  const [search, setSearch] = useState('')
  const [colaboradoresUpd, setColaboradoresUpd] = useState([])


  const handleAddCollaborators = (nombre, email, edad, cargo, telefono) => {
    let collaboratorsUpdate = []
    let newId = 1
    colaboradores.forEach((colaborador) => {
      newId = Number(colaborador.id)
      collaboratorsUpdate.push(colaborador)
    })
    newId++
    collaboratorsUpdate.push({ id: String(newId), nombre: nombre, correo: email, edad: edad, cargo: cargo, telefono: telefono})

    setColaboradores(collaboratorsUpdate)
    setColaboradoresUpd(collaboratorsUpdate)
  }

  const handleSearch = (valor) => {
    setSearch(valor)
  }

  useEffect(() => {
    if (colaboradores == "" && colaboradoresUpd == "") {
      setColaboradores(BaseColaboradores)
      setEncabezado(EnColaboradores)
    } else if (colaboradoresUpd == "") {
      setColaboradoresUpd(colaboradores)
    } else {
    setColaboradores(colaboradoresUpd)
    }
    if (search != "") {
      setColaboradores(colaboradores.filter((colaborador) => 
      colaborador.nombre.includes(search) || 
      colaborador.correo.includes(search) ||
      colaborador.edad.includes(search) || 
      colaborador.cargo.includes(search) || 
      colaborador.telefono.includes(search) ))
    } 

  }, [search])

  return (
    <>
    <Container>
      <Row className='bg-secondary p-2 m-1 justify-content-md-center'>
        <Col className='text-center p-2'>
          <h1>Lista de colaboradores</h1>
          <Buscador
          hASearch={handleSearch}
          />
          <Listado
          Bcolaboradores={colaboradores}
          EColaboradores={encabezado}
          />
        </Col>
        <Col className='text-center p-2'>
          <Formulario 
          msgIni={msgIni}
          msgexito={msgexito}
          msgerror1={msgerror1}
          hACollaborators={handleAddCollaborators}
          />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App