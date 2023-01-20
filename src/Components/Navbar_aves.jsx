import React from 'react'
import {Container,Navbar} from 'react-bootstrap'

const Navbar_aves = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/821/335/png-transparent-bald-eagle-california-condor-silhouette-andean-condor-silhouette-animals-hand-bald-eagle.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Aves de Chile
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Navbar_aves