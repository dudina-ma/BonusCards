import React, { useState, useEffect } from "react";
import './TransactionsPage.less';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getCards } from '../../helpers/api';
import { getTransactions } from '../../helpers/api';
import TransactionList from "../TransactionList/TransactionList";
import getMsFromDateString from "../../helpers/getMsFromDateString";

export default function TransactionsPage() {
	const [cards, setCards] = useState(null);
	const [dateFrom, setDateFrom] = useState("");
	const [dateTo, setDateTo] = useState("");
	const [cardUuid, setCardUuid] = useState(null);
	const [transactions, setTransactions] = useState(null);

	useEffect(() => {
		getCards().then(cards => {
			setCards(cards);
			if (cards.length > 0) {
				setCardUuid(cards[0].uuid);
			}
		});
	}, []);

	if (cards == null) {
		return <div>Loading...</div>;
	}

	const cardNumbersOptions = cards.map((card) => <option key={card.uuid} value={card.uuid}>{card.number}</option>);

	function onDateFromChanged(event) {
		setDateFrom(event.target.value);
	}

	function onDateToChanged(event) {
		setDateTo(event.target.value);
	}

	function onCardNumberChanged(event) {
		setCardUuid(event.target.value);
	}

	function onTransactionListFormSubmited(event) {
		event.preventDefault();
		const dateFromParam = getMsFromDateString(dateFrom) || 0;
		const dateToParam = getMsFromDateString(dateTo) || "";
		const cardUuidParam = cardUuid;
		getTransactions(dateFromParam, dateToParam, cardUuidParam).then(setTransactions);
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
						id="cards-select"
						name="select"
						type="select"
						value={cardUuid}
						onChange={onCardNumberChanged}
					>
						{cardNumbersOptions}
					</Input>
				</FormGroup>
				<Button>
					Получить транзакции
				</Button>
			</Form>
			{transactions != null && <TransactionList transactions={transactions} />}
		</>
	)
};