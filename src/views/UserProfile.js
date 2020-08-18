import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
// import avatar from "../assets/img/";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardText,
	FormGroup,
	Form,
	Input,
	Row,
	Col,
} from "reactstrap";
import fetchclient from "utils/axios";

const UserProfile = (props) => {
	const [user, userData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const submit = async () => {
		try {
			const response = await fetchclient.patch("/user", {
				email: user.email,
				name: user.name,
				about: user.about,
			});
			console.log(response);
			props.history.push("/dashboard/user");
		} catch (error) {
			console.log(error.response);
		}
	};

	async function getUser(id) {
		setLoading(true);
		setError(false);
		try {
			setError(true);
			const response = await fetchclient("/user/" + id);
			userData(response.data.data);
			console.log(response);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		const token = localStorage.getItem("auth-token");
		console.log(token);
		const userid = jwt.decode(token);
		getUser(userid.id);
		// userid.id;
	}, []);
	return (
		<>
			<div className="content">
				{loading ? (
					"loading....."
				) : !error ? (
					"error occured"
				) : (
					<Row>
						<Col md="8">
							<Card>
								<CardHeader>
									<h5 className="title">Edit Profile</h5>
								</CardHeader>
								<CardBody>
									<Form>
										<Row>
											<Col className="pr-md-1">
												<FormGroup>
													<label>Full Name</label>
													<Input
														placeholder="Username"
														type="text"
														defaultValue={user.name ? user.name : ""}
														onInput={(e) =>
															userData({ ...user, name: e.target.value })
														}
													/>
												</FormGroup>
											</Col>
											<Col className="pl-md-1">
												<FormGroup>
													<label htmlFor="exampleInputEmail1">
														Email address
													</label>
													<Input
														placeholder="mike@email.com"
														type="email"
														value={user.email}
														onInput={(e) =>
															userData({ ...user, email: e.target.value })
														}
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col>
												<FormGroup>
													<label>About Me</label>
													<Input
														cols="80"
														placeholder="Here can be your description"
														rows="4"
														type="textarea"
														onInput={(e) =>
															userData({ ...user, about: e.target.value })
														}
													/>
												</FormGroup>
											</Col>
										</Row>
									</Form>
								</CardBody>
								<CardFooter>
									<Button
										className="btn-fill"
										color="primary"
										type="submit"
										onClick={submit}
									>
										Save
									</Button>
								</CardFooter>
							</Card>
						</Col>
						<Col md="4">
							<Card className="card-user">
								<CardBody>
									<CardText style={{ textAlign: "center" }} />
									<div className="author">
										<div className="block block-one" />
										<div className="block block-two" />
										<div className="block block-three" />
										<div className="block block-four" />
										<img
											alt="..."
											className="avatar"
											src={require("assets/img/anime3.png")}
										/>
										<h5 className="title">{user.name}</h5>
										<p className="description">{user.email}</p>
									</div>
									<div className="card-description">{user.about}</div>
									<div style={{ textAlign: "center" }}>
										<Button color="danger"> Delete Account </Button>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>
				)}
			</div>
		</>
	);
};

export default UserProfile;
