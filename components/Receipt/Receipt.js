import React from "react";
import './Receipt.less';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import getDate from "../../helpers/getDate";

export default function Reciept(props) {
	return (
		<div key={props.receipt.uuid} className="reciept">
			<Card>
				<CardBody>
				<CardTitle tag="h5">
						{props.receipt.number ?? ""}
					</CardTitle>
					<CardText>
						<div className="receipt-field">{props.receipt.period ? "Дата чека: " + getDate(props.receipt.period) : ""}</div>
						<div className="receipt-field">{props.receipt.total ? "Сумма чека без учета скидок и оплат бонусами: " + props.receipt.total : ""}</div>
						<div className="receipt-field">{props.receipt.totalWithDiscount ? "Итог чека с учетом скидок и оплат бонусами: " + props.receipt.totalWithDiscount : ""}</div>
						<div className="receipt-field">{props.receipt.bonus ? "Сумма начисленных бонусов: " + props.receipt.bonus : ""}</div>
						<div className="receipt-field">{props.receipt.payment ? "Сумма потраченных бонусов: " + props.receipt.payment : ""}</div>
					</CardText>
				</CardBody>
			</Card>
		</div>
	)
};