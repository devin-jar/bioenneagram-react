import { Carousel, Card, Button, Row, Col } from "react-bootstrap";
import { cardsCarousel } from "../../../data/cardsCarousel";

export const CardCarousel = () => {
  return (
    <Carousel>
      {cardsCarousel.map((card) => (
        <Carousel.Item key={card.id}>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="primary">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
