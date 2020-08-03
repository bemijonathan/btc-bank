import React from "react";
import NavBar from "components/Navbars/RTLNavbar";
import { Container, Col, Row, Button } from "reactstrap";
// import img1 from "../assets/img/banner.png";
import img2 from "../assets/img/image2.png";
// import img3 from "../assets/img/HTB1_cmoaZTxK1Rjy0Fgq6yovpXa2-removebg-preview.png";

export default function Home() {
  return (
    <>
      <div
        className="position-fixed bg-default"
        style={{ width: "100%", zIndex: 4 }}
      >
        <NavBar />
      </div>

      <Container className="pt-5">
        <Row className="align-items-center __h-screen">
          <Col lg="5">
            <img src={img2} alt="btc" />
          </Col>
          <Col>
            <h1 className="title"> WE TRADE CRYPTO CURRENCIES. </h1>
            <h3>
              We recieve result combining marketing, a creative and industry
              experience...
            </h3>
            <Button> Invest </Button> <Button color="warning"> Login </Button>
          </Col>
        </Row>
        <section>
          <div className="my-5 row">
            <div className="col-md-4 ">
              <div className="info bg-default p-3">
                <h4 className="info-title text-white">
                  <i
                    className="tim-icons icon-tap-02 text-primary title"
                    style={{ fontSize: "35px" }}
                  ></i>
                  <span className="ml-2">Register Your Account</span>
                </h4>
                <hr className="line-primary" />
                <p className="text-white">
                  <b>BLK•</b>
                  Design System is a "Developer First" product, with a lot of
                  variables for colors, fonts, sizes and other elements.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info  bg-info p-3">
                <h4 className="info-title text-white">
                  <i
                    className="tim-icons icon-chart-bar-32 text-white title"
                    style={{ fontSize: "35px" }}
                  ></i>
                  <span className="ml-2">Deposit Funds & Watch It Grow</span>
                </h4>
                <hr className="line-warning" />
                <p className="text-white">
                  We are following the latest code standards provided by the
                  guys from Bootstrap, so you will love working with this design
                  system.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info  bg-default p-3 ">
                <h4 className="info-title text-white">
                  <i
                    className="tim-icons icon-coins text-primary title"
                    style={{ fontSize: "35px" }}
                  ></i>
                  <span className="ml-2"> Withdraw Your Profits</span>
                </h4>
                <hr className="line-danger" />
                <p className="text-white">
                  Since all our products are built on top of Open Source also
                  <b>BLK•</b>Design System is released under
                  <a href="https://www.creative-tim.com/license?ref=license-page-mk-pro">
                    MIT License
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        {/** why choose Us Div **/}
        <section className="pt-5">
          <h1 className="title text-center mt-5 text-white"> Why Choose Us</h1>
          <h4
            className="text-center mx-auto text-white"
            style={{ maxWidth: "700px" }}
          >
            trading platform is a group of financial and cryptocurrency experts
            that invest in mining and cryptocurrency trading . We carefully
            examine the volatility of bitcoin and other cryptocurrencies, invest
            and make good profit from our investments.
          </h4>
        </section>
      </Container>
    </>
  );
}
