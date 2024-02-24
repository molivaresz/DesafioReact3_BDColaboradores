import React from 'react'

const Buscador = (props) => {
  return (
    <>
    <form>
      <input type="text" placeholder="Busca un colaborador" onChange={(event) => props.hASearch(event.target.value)} />
    </form>
    </>
  )
}

export default Buscador