import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

export default function Products() {
  return (
    <Row>
      {products.result.map(prod => (
        <Col sm={6}>
          <ProductCard id={prod.id} title={prod.title} detail={prod.detail} />
        </Col>
      ))}
    </Row>
  );
}
