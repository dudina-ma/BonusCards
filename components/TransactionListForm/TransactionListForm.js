import React, { useState, useEffect } from "react";
import './TransactionListForm.less';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getCards } from '../../helpers/api';

export default function TransactionListForm() {
	const [cards, setCards] = useState([]);

	useEffect(() => { getCards().then(setCards) }, []);

	const cardNumbers = cards.map((card) => card.number);

	const cardNumbersOptions = cardNumbers.map((cardNumber) => <option>{cardNumber}</option>);

	return (
		<Form className="transaction-list-form">
			<FormGroup>
				<Label for="date-from">
					Дата начала периода
				</Label>
				<Input
					id="date-from"
					name="date-from"
					type="date"
				/>
			</FormGroup>
			<FormGroup>
				<Label for="date-to">
					Дата окончания периода
				</Label>
				<Input
					id="date-to"
					name="date-to"
					type="date"
				/>
			</FormGroup>
			<FormGroup>
				<Label for="cards-select">
					Номер карты
				</Label>
				<Input
					id="exampleSelect"
					name="select"
					type="select"
				>
					{cardNumbersOptions}
				</Input>
			</FormGroup>
			<Button>
				Получить транзакции
			</Button>
		</Form>
	)
};