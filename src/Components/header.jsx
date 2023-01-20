import React from 'react'
import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'


const Header = ({setValorBusqueda}) => {
  const [valorCaja,setValorCaja] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <br></br>
        <Form.Control 
        type="text" 
        placeholder="Ingresa Nombre Común de Ave a Buscar" 
        className='me-2'
        onChange={(e)=> setValorCaja(e.target.value)}
        />
      </Form.Group>
      <Button style= {{background:"rgb(37, 172, 37)"}} variant="primary" onClick={()=> setValorBusqueda(valorCaja)}>
        Buscar
      </Button>
    </Form>
  )
}

export default Header