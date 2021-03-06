import React, { useState, useEffect } from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import { Product } from "../Components/Product";

export const HomeScreen = () => {
  return (
    <>
      <h1> Latest Products</h1>
      <Row>
        {products.map(product => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {" "}
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
