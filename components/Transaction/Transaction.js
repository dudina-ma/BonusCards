import React from "react";
import './Transaction.less';
import { Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import getDate from "../../helpers/getDate";

export default function Transaction(props) {
	return (
		<div key={props.transaction.uuid} className="transaction">
			<Card>
				<CardBody>
					<CardSubtitle
						className="mb-2 text-muted"
						tag="h6"
					>
						{props.transaction.delta ? "Сумма транзакции: " + props.transaction.delta : ""}
					</CardSubtitle>
					<CardText tag="div">
						<div className="transaction-field">{props.transaction.period ? "Дата транзакции: " + getDate(props.transaction.period) : ""}</div>
						<div className="transaction-field">{props.transaction.comment ? "Комментарий: " + props.transaction.comment : ""}</div>
					</CardText>
				</CardBody>
			</Card>
		</div>
	)
};