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
								Join the King of crypto Investments
								<span className="text-white"> over 90% success recorded</span>
							</h3>
							<p className="text-white mb-3">
								The Design System comes with four pre-built pages to help you
								get started faster. You can change the text and images and.
							</p>
							<div className="btn-wrapper">
								<Button color="primary" to="signin" tag={Link}>
									Login Here
								</Button>
							</div>
						</Col>
						<Col className="" lg="6">
							<Card className="card-register">
								<CardHeader>
									<CardTitle tag="h4">Register</CardTitle>
								</CardHeader>
								<CardBody>
									<Form className="form">
										<InputGroup
											className={classnames({
												"input-group-focus": this.state.fullNameFocus,
											})}
										>
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="tim-icons icon-single-02" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												placeholder="Full Name"
												type="text"
												onFocus={(e) => this.setState({ fullNameFocus: true })}
												onBlur={(e) => this.setState({ fullNameFocus: false })}
											/>
										</InputGroup>
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
										Get Started
									</Button>
									<Button
										color="primary"
										to="signin"
										tag={Link}
										className="d-lg-none d-xl-none btn-round"
									>
										Sign in Here
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
