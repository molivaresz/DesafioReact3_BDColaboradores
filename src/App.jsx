import './App.css'
import BaseColaboradores from './BaseColaboradores';

function App() {

  return (
    <>
      {
        BaseColaboradores.map((colaborador) => 
        <p key={colaborador.id}> {colaborador.id} / {colaborador.nombre} / {colaborador.correo} / {colaborador.cargo} / {colaborador.edad} / {colaborador.telefono}
        </p>
        )      
      }
    </>
  )
}

export default App