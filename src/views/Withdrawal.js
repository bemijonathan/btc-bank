/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import classnames from "classnames";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Row,
	Col,
	InputGroup,
	Form,
	Input,
	InputGroupText,
	InputGroupAddon,
} from "reactstrap";

class Notifications extends React.Component {
	notify = (color) => {
		var options = {};
		options = {
			place: "tr",
			message: (
				<div>
					<div>
						Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
						every web developer.
					</div>
				</div>
			),
			type: color,
			icon: "tim-icons icon-bell-55",
			autoDismiss: 7,
		};
		this.refs.notificationAlert.notificationAlert(options);
	};
	state = {};
	render() {
		return (
			<>
				<div className="content">
					<div className="react-notification-alert-container">
						<NotificationAlert ref="notificationAlert" />
					</div>
					<Row>
						<Col md="8" xs="10" sm="11" className="mx-auto">
							<Card>
								<CardHeader>
									<CardTitle tag="h4">Request Withdrawal</CardTitle>
								</CardHeader>
								<CardBody>
									<Form className="form">
										<InputGroup
											className={classnames({
												"input-group-focus": this.state.anount,
											})}
										>
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="tim-icons icon-email-85" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												placeholder="Amount"
												type="number"
												onFocus={(e) => this.setState({ amount: true })}
												onBlur={(e) => this.setState({ amount: false })}
											/>
										</InputGroup>

										<InputGroup
											className={classnames({
												"input-group-focus": this.state.anount,
											})}
										>
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="tim-icons icon-email-85" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												placeholder="Amount"
												type="number"
												onFocus={(e) => this.setState({ amount: true })}
												onBlur={(e) => this.setState({ amount: false })}
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

										<Button>WithDraw</Button>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default Notifications;
