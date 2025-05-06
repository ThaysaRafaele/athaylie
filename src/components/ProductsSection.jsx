import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import shortImage from '../assets/short.png';
import pugImage from '../assets/pug.png';
import unicornImage from '../assets/unicornio.png';
import frogImage from '../assets/yoshi frente.png';

function ProductCard({ product, addToCart }) {
  const { id, name, description, price, image } = product;

  return (
    <Card className="h-100 shadow-sm">
      <div className="bg-light p-3 text-center" style={{ height: '200px' }}>
        <Card.Img 
          variant="top" 
          src={image} 
          alt={name} 
          className="img-fluid h-100" 
          style={{ objectFit: 'contain' }}
        />
      </div>
      <Card.Body>
        <Card.Title className="text-primary">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-primary fw-bold">
            {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <Button 
            variant="outline-primary" 
            size="sm"
            onClick={() => addToCart(product)}
          >
            Adicionar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function ProductsSection({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Short de Crochê",
      description: "Short artesanal em crochê com acabamento de babado. Confortável e estiloso.",
      price: 69.90,
      image: shortImage
    },
    {
      id: 2,
      name: "Amigurumi Pug",
      description: "Cachorrinho Pug de crochê, perfeito para presentear e decorar. Feito à mão.",
      price: 19.90,
      image: pugImage
    },
    {
      id: 3,
      name: "Chaveiro Unicórnio",
      description: "Chaveiro de unicórnio em crochê.",
      price: 19.90,
      image: unicornImage
    },
    {
      id: 4,
      name: "Amigurumi Yoshi",
      description: "Yoshi de crochê, feito com fios antialérgicos. Ideal para crianças.",
      price: 49.90,
      image: frogImage
    }
  ];

  return (
    <section id="produtos" className="py-5">
      <Container>
        <h2 className="text-center text-primary mb-5">Produtos em Destaque</h2>
        <Row className="g-4">
          {products.map(product => (
            <Col key={product.id} xs={12} sm={6} md={3}>
              <ProductCard 
                product={product} 
                addToCart={addToCart} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductsSection;