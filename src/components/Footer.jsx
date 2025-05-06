import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="mb-3">ATHAYLIE</h5>
            <p className="mb-3">Crochê que aquece corações, um ponto de cada vez.</p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <BsFacebook size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <BsInstagram size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <BsTwitter size={22} />
              </a>
            </div>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-3">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-white">Início</a></li>
              <li className="mb-2"><a href="#produtos" className="text-decoration-none text-white">Produtos</a></li>
              <li className="mb-2"><a href="#sobre" className="text-decoration-none text-white">Sobre Nós</a></li>
              <li className="mb-2"><a href="#contato" className="text-decoration-none text-white">Contato</a></li>
              <li className="mb-2"><a href="#faq" className="text-decoration-none text-white">FAQ</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-3">Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" />
                <span>Campo Grande, MS - Brasil</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaEnvelope className="me-2" />
                <span>thaysarafaele@gmail.com</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaPhoneAlt className="me-2" />
                <span>(67) 99345-5044</span>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} ATHAYLIE. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;