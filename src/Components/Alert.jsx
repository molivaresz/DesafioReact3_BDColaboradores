import Alert from 'react-bootstrap/Alert';

const Alerta = (props) => {
    return (
        <>
        <Alert key={props.coloralerta} variant={props.coloralerta}>
            {props.msgalerta}
        </Alert>
        </>
    )
}

    export default Alerta