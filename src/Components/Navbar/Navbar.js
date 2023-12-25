import React from 'react'
import "./Navbar.css"
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function NavbarComp() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">ShowTime</Navbar.Brand>
        <Nav className="me-auto">
        </Nav>
        <Button variant='light' className="py-2 bg-light"> SignIn</Button>
      </Container>
    </Navbar>
   
  )
}

export default NavbarComp