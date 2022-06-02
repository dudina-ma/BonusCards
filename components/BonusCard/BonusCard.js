import React from "react";
import './BonusCard.less';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default function BonusCard(props) {
	return (
		<div key={props.card.number} className="bonus-card">
			<Card>
				<CardBody>
					<CardTitle tag="h5">
						{props.card.number}
					</CardTitle>
					<CardSubtitle
						className="mb-2 text-muted"
						tag="h6"
					>
						{props.card.holder ? "Holder: " + props.card.holder : ""}
					</CardSubtitle>
					<CardText>
						<div className="card-field">{props.card.email ? "Email: " + props.card.email : ""}</div>
						<div className="card-field">{props.card.phone ? "Phone: " + props.card.phone : ""}</div>
						<div className="card-field">{props.card.birthdate ? "Birthdate: " + props.card.birthdate : ""}</div>
						<div className="card-field">{props.card.created_date ? "Created_date: " + props.card.created_date : ""}</div>
						<div className="card-field">{props.card.status ? "Status: " + props.card.status : ""}</div>
						<div className="card-field">{props.card.sales ? "Sales: " + props.card.sales : ""}</div>
						<div className="card-field">{props.card.balance ? "Balance: " + props.card.balance : ""}</div>
					</CardText>
					<Button tag="a" href="/ggg" className="get-transactions-btn">
						Get card transactions
					</Button>
				</CardBody>
			</Card>
		</div>
	)
};