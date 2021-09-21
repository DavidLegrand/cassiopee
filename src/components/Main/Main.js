import React, { useRef, useEffect } from "react";
import Slider from "./Slider";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Collapsed from "./Collapsed";

import { Container, Row, Col } from "react-bootstrap";

const Main = ({ open }) => {
  return (
    <main>
      <Slider></Slider>
      <Container>
        <Row>
          <Col className="col-12 col-lg-3 order-3">
            <Collapsed open={open}></Collapsed>
          </Col>
          <Col className="col-lg-9 col-12 order-lg-1 order-2">
            <Content></Content>
          </Col>
          <Col className="col-lg-3 col-12 order-lg-2 order-1 mt-5 mt-lg-0">
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
