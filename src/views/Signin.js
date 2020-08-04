import React from "react";
import NavBar from "components/Navbars/RTLNavbar";

import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default class Signup extends React.Component {
  state = {};
  render() {
    return (
      <div className="section section-signup">
        <div
          className="position-fixed bg-default"
          style={{ width: "100%", zIndex: 4 }}
        >
          <NavBar />
        </div>
        <Container>
          <Row className=" justify-content-center align-items-center __h-screen">
            <Col lg="6" className="d-none d-lg-block d-xl-block">
              <h3 className="display-3 text-white">
                Welcome back to the King of crypto Investments
                <span className="text-white"> over 90% success recorded</span>
              </h3>
              <div className="btn-wrapper">
                <Button color="primary" to="signup" tag={Link}>
                  Register Here
                </Button>
              </div>
            </Col>
            <Col className="" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardTitle tag="h4">Log In</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={(e) => this.setState({ emailFocus: true })}
                        onBlur={(e) => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.passwordFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="text"
                        onFocus={(e) => this.setState({ passwordFocus: true })}
                        onBlur={(e) => this.setState({ passwordFocus: false })}
                      />
                    </InputGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-round" color="primary">
                    Log In
                  </Button>
                  <Button
                    color="primary"
                    to="signup"
                    tag={Link}
                    className="d-lg-none d-xl-none btn-round"
                  >
                    Register Here
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
