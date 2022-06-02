import React from "react";
import './BonusCard.less';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import getDate from "../../helpers/getDate";

export default function BonusCard(props) {
	return (
		<div key={props.card.number} className="bonus-card">
			<Card>
				<CardBody>
					<CardTitle tag="h5">
						{props.card.number ?? ""}
					</CardTitle>
					<CardSubtitle
						className="mb-2 text-muted"
						tag="h6"
					>
						{props.card.holder ? "Владелец карты: " + props.card.holder : ""}
					</CardSubtitle>
					<CardText>
						<p className="card-field">{props.card.email ? "Email: " + props.card.email : ""}</p>
						<p className="card-field">{props.card.phone ? "Телефон: " + props.card.phone : ""}</p>
						<p className="card-field">{props.card.birthdate ? "Дата рождения: " + props.card.birthdate : ""}</p>
						<p className="card-field">{props.card.created_date ? "Дата создания: " + getDate(props.card.created_date) : ""}</p>
						<p className="card-field">{props.card.status ? "Статус: " + props.card.status : ""}</p>
						<p className="card-field">{props.card.sales ? "Сумма продаж: " + props.card.sales : ""}</p>
						<p className="card-field">{props.card.balance ? "Текущий баланс: " + props.card.balance : ""}</p>
					</CardText>
					<Button tag="a" href="/ggg" className="get-transactions-btn">
						Получить транзакции по карте
					</Button>
				</CardBody>
			</Card>
		</div>
	)
};