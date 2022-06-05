import React, { useState, useEffect } from "react";
import './TransactionListForm.less';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getCards } from '../../helpers/api';
import { getTransactions } from '../../helpers/api';
import TransactionList from "../TransactionList/TransactionList";

export default function TransactionListForm() {
	const [cards, setCards] = useState(null);
	const [dateFrom, setDateFrom] = useState("");
	const [dateTo, setDateTo] = useState("");
	const [cardNumber, setCardNumber] = useState(null);
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		getCards().then(cards => {
			setCards(cards);
			if (cards.length > 0) {
				setCardNumber(cards[0].number);
			}
		});
	}, []);

	if (cards == null) {
		return <div>Loading...</div>;
	}

	const cardNumbers = cards.map((card) => card.number);

	const cardNumbersOptions = cardNumbers.map((cardNumber) => <option>{cardNumber}</option>);

	function onDateFromChanged(event) {
		setDateFrom(event.value);
	}

	function onDateToChanged(event) {
		setDateTo(event.value);
	}

	function onCardNumberChanged(event) {
		setCardNumber(event.value);
	}

	function onTransactionListFormSubmited(event) {
		event.preventDefault();

		console.log(cardNumber);

		const dateFromParam = dateFrom || 0;
		const dateToParam = dateTo;
		const cardIndex = cards.findIndex((card) => Number(card.number) === Number(cardNumber));

		console.log(cardIndex);

		const cardNumberParam = cards[cardIndex].uuid;
		getTransactions(dateFromParam, dateToParam, cardNumberParam).then(t => {
			setTransactions(t);
			console.log('!TRANSACTIONS: ' + t);
		});
	}

	return (
		<>
			<Form className="transaction-list-form" onSubmit={onTransactionListFormSubmited}>
				<FormGroup>
					<Label for="date-from">
						Дата начала периода
					</Label>
					<Input
						id="date-from"
						name="date-from"
						type="date"
						value={dateFrom}
						onChange={onDateFromChanged}
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
						value={dateTo}
						onChange={onDateToChanged}
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
						value={cardNumber}
						onChange={onCardNumberChanged}
					>
						{cardNumbersOptions}
					</Input>
				</FormGroup>
				<Button>
					Получить транзакции
				</Button>
			</Form>
			{transactions.length === 0 ? "" : <TransactionList transactions={transactions}/>}
		</>
	)
};