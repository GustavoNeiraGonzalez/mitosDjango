import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function Header() {


  return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Navbar.Text><Link to="/">Home</Link></Navbar.Text>
                <Navbar.Text><Link to="/InicioSesion">Features</Link></Navbar.Text>
                <Navbar.Text><Link to="/">Pricing</Link></Navbar.Text>
            </Nav>
            </Container>
        </Navbar>
  )
}
