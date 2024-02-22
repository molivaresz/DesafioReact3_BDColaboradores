import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alerta from './Alert';
import { useState } from 'react'

const Formulario = (props) => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState(0);
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState(props.msgIni)
    const [colorerror, setColorError] = useState('info')

    const validarCampos = (e) => {
        e.preventDefault()

        if(nombre != '' && email != '' && edad != '' && cargo != '' && telefono != '') {
          setError(props.msgexito)
          setColorError('success')
        } else {
            setError(props.msgerror1)
            setColorError('danger')
        }
    }

    return (
        <>
        <Container>
            <Row>
                <Col>
                    <form className="formulario" onSubmit={validarCampos}>
                        <div className="form-group pb-2">
                            <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre del colaborador"
                            className="form-control"
                            onChange={(event) => setNombre(event.target.value)}
                            value={nombre}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <input
                            type="text"
                            name="email"
                            placeholder="email del colaborador"
                            className="form-control"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <input
                            type="number"
                            name="Edad"
                            placeholder="Edad del colaborador"
                            className="form-control"
                            onChange={(event) => setEdad(event.target.value)}
                            value={edad}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <input
                            type="text"
                            name="Cargo"
                            placeholder="Cargo del colaborador"
                            className="form-control"
                            onChange={(event) => setCargo(event.target.value)}
                            value={cargo}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <input
                            type="text"
                            name="Telefono"
                            placeholder="Telefono del colaborador"
                            className="form-control"
                            onChange={(event) => setTelefono(event.target.value)}
                            value={telefono}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Agregar colaborador</button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col className='p-2'>
                    <Alerta 
                    msgalerta={error}
                    coloralerta={colorerror}
                    />
                </Col>
            </Row> 
        </Container>

        </>

    )
}

    export default Formulario