import React, { useEffect, useState } from "react";
import {
	Col,
	Row,
	Card,
	CardBody,
	CardTitle,
	CardHeader,
	Table,
} from "reactstrap";
import fetchclient from "utils/axios";

export default function Transactions() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);

	const getData = async () => {
		setLoading(true);
		setError(false);
		console.log("getting Data");
		try {
			let data = await fetchclient("/transaction");
			console.log(data);
			setData(data.data.data);
		} catch (error) {
			setError(true);
			console.log(error.response);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const TableLoop = () => {
		return data.map((e) => {
			return (
				<tr key={e._id}>
					<td>{e.createdAt.slice(0, 10)}</td>
					<td>{e.transactionsType}</td>
					<td>{e.status}</td>
					<td className="text-center">{e.amount}btc</td>
				</tr>
			);
		});
	};
	return (
		<>
			<div className="content">
				<h1 className="title text-white"> Transactions </h1>
				<Row>
					<Col md="12">
						<Card>
							<CardHeader>
								<CardTitle tag="h4">Simple Table</CardTitle>
							</CardHeader>
							<CardBody>
								{loading ? (
									"loading....."
								) : error ? (
									"error occured...."
								) : (
									<Table className="tablesorter" responsive>
										<thead className="text-primary">
											<tr>
												<th>DATE</th>
												<th>TYPE</th>
												<th>STATUS</th>
												<th className="text-center">Amount</th>
											</tr>
										</thead>
										<tbody>{TableLoop()}</tbody>
									</Table>
								)}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

// const data = [
// 	{
// 		data,
// 	},
// ];
