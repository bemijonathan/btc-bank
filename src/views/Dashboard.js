import React from "react";
import "assets/css/custom.css";
// reactstrap components
import { Card, CardHeader, CardTitle, Row, Col } from "reactstrap";
import fetchclient from "utils/axios";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bigChartData: "data1",
			balance: {},
		};
	}
	componentDidMount() {
		fetchclient("/user").then((data) => {
			this.setState({ balance: data.data.data.balance });
		});
	}
	setBgChartData = (name) => {
		this.setState({
			bigChartData: name,
		});
	};
	render() {
		return (
			<>
				<div className="content">
					<Row>
						<Col lg="4">
							<Card className="card-chart">
								<CardHeader>
									<h5 className="card-category">Total Balance</h5>
									<CardTitle tag="h3">
										<i className="tim-icons icon-bell-55 text-info" />{" "}
										{this.state.balance.confirmed
											? "$" + this.state.balance.confirmed
											: "$0.000"}
									</CardTitle>
								</CardHeader>
							</Card>
						</Col>
						<Col lg="4">
							<Card className="card-chart">
								<CardHeader>
									<h5 className="card-category">Invested Amount</h5>
									<CardTitle tag="h3">
										<i className="tim-icons icon-coins text-primary" />{" "}
										{this.state.balance.deposit
											? this.state.balance.deposit
											: "$0.000"}
									</CardTitle>
								</CardHeader>
							</Card>
						</Col>
						<Col lg="4">
							<Card className="card-chart">
								<CardHeader>
									<h5 className="card-category">Total Earnings</h5>
									<CardTitle tag="h3">
										<i className="tim-icons icon-bank text-success" />
										{this.state.balance.deposit - this.state.balance.confirmed >
										0
											? this.state.balance.deposit -
											  this.state.balance.confirmed
											: "$0.000"}
									</CardTitle>
								</CardHeader>
							</Card>
						</Col>
					</Row>
					<Row className="p-3 mb-5">
						<div className="chart_frame">
							<div className="inner_frame">
								<iframe
									title="telegraph"
									src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505"
									width="100%"
									height="536px"
									scrolling="auto"
									marginwidth="0"
									marginheight="0"
									frameborder="0"
									border="0"
								></iframe>
							</div>
						</div>
					</Row>
				</div>
			</>
		);
	}
}

export default Dashboard;
