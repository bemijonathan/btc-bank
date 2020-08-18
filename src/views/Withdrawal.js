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
} from "reactstrap";
import fetchclient from "utils/axios";

class Notifications extends React.Component {
	notify = (color, message) => {
		var options = {};
		options = {
			place: "tr",
			message: (
				<div>
					{color === "success" ? (
						<div>
							A confirmation mail will be sent to you in no time -
							NB:Withdrawals might take some time to be completed
						</div>
					) : (
						<div>{message}</div>
					)}
				</div>
			),
			type: color,
			icon: "tim-icons icon-bell-55",
			autoDismiss: 7,
		};
		this.refs.notificationAlert.notificationAlert(options);
	};
	state = {
		amount: "",
		wallet: "",
	};
	render() {
		const submit = async (e) => {
			e.preventDefault();
			this.notify("success");

			try {
				const { wallet, amount } = this.state;
				const data = {
					transactionsType: "WITHDRAWAL",
					wallet,
					amount,
				};
				const response = await fetchclient.post("transactions", {
					data,
				});
				console.log(response);
			} catch (error) {
				console.log(error.response);
			}
		};
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
									<Form className="form" onSubmit={submit}>
										<InputGroup
											className={classnames({
												"input-group-focus": this.state.passwordFocus,
											})}
										>
											<Input
												placeholder="Amount"
												type="number"
												onFocus={(e) => this.setState({ passwordFocus: true })}
												onBlur={(e) => this.setState({ passwordFocus: false })}
												onInput={(e) =>
													this.setState({ amount: e.target.value })
												}
											/>
										</InputGroup>
										<InputGroup
											className={classnames({
												"input-group-focus": this.state.passwordFocus,
											})}
										>
											<Input
												placeholder="Wallet"
												type="text"
												onFocus={(e) => this.setState({ passwordFocus: true })}
												onBlur={(e) => this.setState({ passwordFocus: false })}
												onInput={(e) =>
													this.setState({ wallet: e.target.value })
												}
											/>
										</InputGroup>

										<Button
											disabled={
												this.state.amount.length && this.state.wallet.length
													? false
													: true
											}
										>
											WithDraw
										</Button>
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
