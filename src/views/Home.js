import React from "react";
import NavBar from "components/Navbars/RTLNavbar";
import { Container, Col, Row } from "reactstrap";
import img1 from "../assets/img/91CAVpbW3WL-removebg-preview.png";
import img2 from "../assets/img/ezgif-2-6951d868bc12-removebg-preview.png";
import img3 from "../assets/img/HTB1_cmoaZTxK1Rjy0Fgq6yovpXa2-removebg-preview.png";

import { UncontrolledCarousel } from "reactstrap";

// const carouselItems = [
//   {
//     src: img1,
//     altText: "Slide 1",
//     caption: "",
//   },
//   {
//     src: img2,
//     altText: "Slide 2",
//     caption: "",
//   },
//   {
//     src: img3,
//     altText: "Slide 3",
//     caption: "",
//   },
// ];

// <UncontrolledCarousel items={carouselItems} />

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="pt-5">
        <h2 className="mt-5"> Home </h2>
        <Row>
          <Col>
            <img src={img1} />
          </Col>
          <Col>
            <h1 className="title"> Bitcoins </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
