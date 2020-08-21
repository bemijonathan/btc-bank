import React from "react";
import Notify from "react-notification-alert";
import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Table,
	Row,
	Col,
	Button,
	Modal,
	ModalBody,
	Form,
	InputGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import fetchclient from "utils/axios";
import classnames from "classnames";

class Tables extends React.Component {
	state = {
		users: [],
		modalStatus: false,
		id: "",
		status: "",
		disabled: false,
	};
	getDAta() {
		fetchclient("/transaction/all").then((users) => {
			console.log(users);
			this.setState({ users: users.data.data });
		});
	}
	componentDidMount() {
		this.getDAta();
	}
	render() {
		const editTransactions = (id) => {
			this.setState({ id, modalStatus: true });
		};
		const toggle = () => {
			this.setState({ modalStatus: false });
		};
		const { users, modalStatus, status, id } = this.state;

		let options = {
			place: "tc",
			message: "",
			type: "",
			autoDismiss: 3,
			// icon: "icon-simple-remove",
		};

		const AddCoins = async (e) => {
			e.preventDefault();
			this.setState({ disabled: true });
			try {
				const x = await fetchclient.patch("transaction/" + id, {
					status,
				});
				console.log(x);
				this.refs.notify.notificationAlert({
					...options,
					message: "coin added sucessfully",
					type: "success",
				});
				this.getDAta();
			} catch (error) {
				console.log(error.response);
				this.refs.notify.notificationAlert({
					...options,
					message: error.response.data?.error?.message
						? error.response.data.error.message
						: "failed to add coin",
					type: "danger",
				});
			}
			this.setState({ disabled: false });
		};
		return (
			<>
				<div className="content">
					<Notify ref="notify" />
					<Row>
						<Col md="12">
							<Card>
								<CardHeader>
									<CardTitle tag="h4">All Transactions</CardTitle>
								</CardHeader>
								<CardBody>
									<Table className="tablesorter" responsive>
										<thead className="text-primary">
											<tr>
												<th>Name</th>
												<th>Country</th>
												<th>City</th>
												<th>Salary</th>
												<th className="text-center"> Modify </th>
											</tr>
										</thead>
										<tbody>
											{users.map((e) => {
												return (
													<tr key={e._id}>
														<td>Jon Porter</td>
														<td>{e.transactionsType}</td>
														<td>{e.status}</td>
														<td>{e.amount}btc</td>
														<td className="text-center">
															<Button
																size="sm"
																onClick={() => {
																	editTransactions(e._id);
																}}
															>
																Update
															</Button>
														</td>
														<td>
															<Button
																size="sm"
																onClick={() =>
																	this.props.history.push(
																		"/dashboard/admin/" + e._id
																	)
																}
															>
																{" "}
																View{" "}
															</Button>
														</td>
													</tr>
												);
											})}
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
					</Row>

					<Modal isOpen={modalStatus} toggle={toggle}>
						<ModalBody>
							<Card>
								<CardBody>
									<Form className="form" onSubmit={AddCoins}>
										<InputGroup
											className={classnames({
												"input-group-focus": this.state.statusFocus,
											})}
										>
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="tim-icons icon-lock-circle" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												placeholder="Status"
												type="select"
												onFocus={(e) => this.setState({ statusFocus: true })}
												onBlur={(e) => this.setState({ statusFocus: false })}
												onChange={(e) =>
													this.setState({ status: e.target.value })
												}
											>
												<option selected={true} disabled={true}>
													select
												</option>
												<option value={"PENDING"}>Pending</option>
												<option value={"CONFIRMED"}>Confirmed</option>
												<option value={"FAILED"}>Failed</option>
											</Input>
										</InputGroup>
										<Button
											className="btn-round"
											color="primary"
											disabled={
												this.state.status.length && !this.state.disabled
													? false
													: true
											}
										>
											Update
										</Button>
									</Form>
								</CardBody>
							</Card>
						</ModalBody>
					</Modal>
				</div>
			</>
		);
	}
}

export default Tables;
