import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import logo from '../assets/athaylie-transp-logo.png';

function HeroSection({ addToCart }) {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold text-primary mb-3">Crochê que aquece corações</h1>
            <p className="lead mb-4">
              Bem-vindo à ATHAYLIE, onde cada ponto de crochê é feito com amor.
              Nossas peças artesanais são cuidadosamente confeccionadas à mão,
              com materiais de alta qualidade para trazer conforto e carinho para sua vida.
            </p>
            <div className="d-flex gap-3">
              <Button 
                variant="primary" 
                onClick={addToCart}
                className="d-inline-flex align-items-center"
              >
                <BsCart className="me-2" />
                Fazer Pedido
              </Button>
              <Button variant="outline-primary">
                Ver Catálogo
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={logo}
              alt="Logo Athaylie"
              className="img-fluid shadow rounded-circle border border-4 border-white"
              style={{ maxHeight: '350px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;