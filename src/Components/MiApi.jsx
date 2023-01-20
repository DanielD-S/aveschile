import React, { useState, useEffect } from 'react'
import { Button, Card, Row, Col, Container, Modal } from 'react-bootstrap'

const Entrada = ({ valorBusqueda }) => {
  {/*Recivo props*/ }

  const [aves, setAves] = useState([]);
  const [cargado, setCargado] = useState(false); {/*Componente Falso cuando se inicia api*/ }
  const [isSorted, setIsSorted] = useState(false);
  let API = "https://aves.ninjas.cl/api/birds"



  const [showModal, setShowModal] = useState(false);


  const [selectedData, setSelectedData] = useState({ name: null, image: null });


  const openModal = (data) => {
    setSelectedData({ name: data.name.spanish, image: data.images.thumb, latin:data.name.latin ,english:data.name.english });
    setShowModal(true);
  }



  const closeModal = () => {
    setShowModal(false);
  }



  /**
   * 
   * 
   */


  /*LLAMADA DE API*/
  useEffect(() => {
    /*Se ejecuta funcion Callback en esta seccion*/
    getData();
    /*Se ejecuta Dependencia,cuando cambia estado*/
  }, []);


  async function getData() {
    const res = await fetch(API);
    const data = await res.json();  /*Convierte a un arreglo objetos*/
    setAves(data)
    setCargado(true);
  };
  /**
   * 
   * 
   */


  /*ORDENAR ARRAY DE A-Z MEDIANTE SORT*/
  const sortAves = () => {
    const sortedData = aves.sort((a, b) => (a.name.spanish > b.name.spanish ? 1 : -1))
    setAves(sortedData)
    setIsSorted(true);
  }

  /**
   * 
   * 
   */










  {/*Retorna informacion api formato card*/ }

  return cargado ? (
    <Container>
      <Row>
        <Button variant="success" onClick={sortAves} style={{ width: "100%", marginTop: "10px", background: "rgb(37, 172, 37)" }}>
          Ordenar Aves de A - Z
        </Button>
        {isSorted ?
          aves
            .filter((p) => {
              console.log(p)
              return p.name.spanish.toLowerCase().includes(valorBusqueda.toLowerCase());
            })
            .map((aves) => {
              return (
                <Col key={aves.sort} style={{ marginTop: "3vh", marginBottom:"2vh" }}>
                  <Card style={{ width: "19rem" }}>
                    <Card.Img variant="top" src={aves.images.thumb} style={{ cursor: 'pointer' }} onClick={() => openModal(aves)} />
                    <Card.Body>
                      <Container
                        className="d-flex"
                        style={{ justifyContent: "center" }}
                      >
                        <Row>
                          <Card.Title style={{ textAlign: "center" }} onClick={() => openModal(aves)}>
                            <b>{aves.name.spanish}</b>
                          </Card.Title>
                          <Modal style={{ textAlign: "center" }} show={showModal} onHide={closeModal}>
                            <Modal.Header style={{background:"rgb(37, 172, 37)"}}closeButton>
                        
                            </Modal.Header>
                            <Modal.Body >
                              <div>
                              <b>Nombre Cientifico:</b> <i>{selectedData.latin}</i>
                              </div>
                              <hr />
                            <div>
                            <b>Nombre Común:</b> {selectedData.name} / {selectedData.english}
                            </div>
                            
                            <hr />
                            <img style={{width:"80%",borderRadius:"5%"}}src={selectedData.image} alt="+"/>
                            </Modal.Body>
                          </Modal>
                        <Card.Text style={{ textAlign: "center" }}>    
                          </Card.Text>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }) :
          aves
            .filter((p) => {
              console.log(p)
              return p.name.spanish.toLowerCase().includes(valorBusqueda.toLowerCase());
            })
            .map((aves) => {
              return (
                <Col key={aves.sort} style={{ marginTop: "3vh", marginBottom:"2vh" }}>
                  <Card style={{ width: "19rem" }}>
                    <Card.Img variant="top" src={aves.images.thumb} style={{ cursor: 'pointer' }} onClick={() => openModal(aves)} />
                    <Card.Body>
                      <Container
                        className="d-flex"
                        style={{ justifyContent: "center" }}
                      >
                        <Row>
                          <Card.Title style={{ textAlign: "center" }} onClick={() => openModal(aves)}>
                            <b>{aves.name.spanish}</b>
                          </Card.Title>
                          <Modal style={{ textAlign: "center" }} show={showModal} onHide={closeModal}>
                            <Modal.Header style={{background:"rgb(37, 172, 37)"}}closeButton>
                            </Modal.Header>
                            <Modal.Body >
                              <div>
                              <b>Nombre Cientifico:</b> <i>{selectedData.latin}</i>
                              </div>
                              <hr />
                            <div>
                            <b>Nombre Común:</b> {selectedData.name} / {selectedData.english}
                            </div>
                            
                            <hr />
                            <img style={{width:"80%",borderRadius:"5%"}}src={selectedData.image} alt="+"/>
                            </Modal.Body>
                          </Modal>
                        <Card.Text style={{ textAlign: "center" }}>    
                          </Card.Text>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
        }
      </Row>
    </Container>
  ) : (
    <div>
      <h3>Cargando, Espere un momento ...</h3>
    </div>

  );
};
export default Entrada