import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export  function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={( { isActive } ) => isActive ? ' nav-link bg-danger-subtle' : 'nav-link'} to="/">Home</NavLink>
                        <NavLink className={( { isActive } ) => isActive ? ' nav-link bg-danger-subtle' : 'nav-link'} to="/products">Products</NavLink>
                        <NavLink className={( { isActive } ) => isActive ? ' nav-link bg-danger-subtle' : 'nav-link'} to="/fff">Login</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
