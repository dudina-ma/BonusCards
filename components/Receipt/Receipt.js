import React from "react";
import './Receipt.less';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import getDate from "../../helpers/getDate";

export default function Receipt(props) {
	const receiptCard = props.cards.find((card) => card.uuid === props.receipt.card_uuid);
	return (
		<div key={props.receipt.uuid} className="receipt">
			<Card>
				<CardBody>
				<CardTitle tag="h5">
						{props.receipt.number ?? ""}
					</CardTitle>
					<CardText tag="div">
						<div className="receipt-field">{props.receipt.period ? "Дата чека: " + getDate(props.receipt.period) : ""}</div>
						<div className="receipt-field">{props.receipt.total ? "Сумма чека без учета скидок и оплат бонусами: " + props.receipt.total : ""}</div>
						<div className="receipt-field">{props.receipt.totalWithDiscount ? "Итог чека с учетом скидок и оплат бонусами: " + props.receipt.totalWithDiscount : ""}</div>
						<div className="receipt-field">{props.receipt.bonus ? "Сумма начисленных бонусов: " + props.receipt.bonus : ""}</div>
						<div className="receipt-field">{props.receipt.payment ? "Сумма потраченных бонусов: " + props.receipt.payment : ""}</div>
						<div className="receipt-field">{props.receipt.card_uuid ? "Номер карты: " + receiptCard.number : ""}</div>
					</CardText>
				</CardBody>
			</Card>
		</div>
	)
};