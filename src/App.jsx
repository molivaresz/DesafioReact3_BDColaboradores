import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BaseColaboradores} from './assets/BaseColaboradores';
import { EnColaboradores } from './assets/EnColaboradores';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import { useState } from 'react';

function App() {
  const [msgIni, setMsgini] = useState('Favor, completar los campos para registrarse')
  const [msgexito, setMsgexito] = useState('El registro ha sido exitoso')
  const [msgerror1, setMsgerror1] = useState('Todos los campos son obligatorios')

  return (
    <>
      <Listado
      Bcolaboradores={BaseColaboradores}
      EColaboradores={EnColaboradores}
      />
      <Formulario 
      msgIni={msgIni}
      msgexito={msgexito}
      msgerror1={msgerror1}
      />

    </>
  )
}

export default App