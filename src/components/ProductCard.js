import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://picsum.photos/id/${props.id}/400/240`}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <Link className="btn btn-primary" to={`products/${props.id}`}>
          Explore
        </Link>
      </Card.Body>
    </Card>
  );
}
