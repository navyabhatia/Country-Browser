import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Details = (detail) => {
  return (
    <div>
      {detail.length === 0 ? (
        " "
      ) : (
        <Container>
          <h1>Welcome to {detail.name}</h1>
          <Col>
            <img
              src={detail.flag}
              height="auto"
              width="320px"
              alt="country flag"
            />
          </Col>
        </Container>
      )}
    </div>
  );
};

export default Details;
