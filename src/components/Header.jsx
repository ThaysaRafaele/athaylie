import React, { useState } from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import logo from '../assets/athaylie-transp-logo.png';

function Header({ cartItems = 0 }) {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle me-2"
            alt="Athaylie Logo"
          />
          <span className="fw-bold text-rose">ATHAYLIE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#produtos">Produtos</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href="#carrinho" className="position-relative">
              <BsCart size={20} />
              {cartItems > 0 && (
                <Badge 
                  pill 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;