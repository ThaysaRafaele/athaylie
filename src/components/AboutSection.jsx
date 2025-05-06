import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/athaylie-transp-logo.png';

function AboutSection() {
  return (
    <section id="sobre" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <img
              src={logo}
              alt="Logo Athaylie"
              className="img-fluid rounded-circle border border-4 border-white shadow"
              style={{ maxWidth: '250px' }}
            />
          </Col>
          <Col md={8}>
            <h2 className="text-primary mb-4">Sobre a ATHAYLIE</h2>
            <p className="lead">
              A ATHAYLIE nasceu da paixão pelo crochê e da vontade de criar peças que aquecem corações.
              Nosso nome reflete nossa missão: criar peças artesanais que conectam pessoas através do
              toque macio e aconchegante de cada ponto feito à mão.
            </p>
            <p className="mb-4">
              "Crochê que aquece corações, um ponto de cada vez" - este é nosso lema, porque acreditamos
              que cada peça carrega amor, dedicação e histórias para serem compartilhadas.
              Utilizamos apenas materiais de qualidade para garantir durabilidade e conforto.
            </p>
            <Button variant="primary">
              Conheça Nossa História
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;