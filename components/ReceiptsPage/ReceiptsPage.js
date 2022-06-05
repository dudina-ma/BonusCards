import React, { useState, useEffect } from "react";
import './ReceiptsPage.less';
import { getReceipts, getCards } from '../../helpers/api';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ReceiptList from "../ReceiptList/ReceiptList";
import getMsFromDateString from "../../helpers/getMsFromDateString";

export default function ReceiptsPage() {
	const [cards, setCards] = useState(null);
	const [dateFrom, setDateFrom] = useState("");
	const [dateTo, setDateTo] = useState("");
	const [cardUuid, setCardUuid] = useState(null);
	const [receipts, setReceipts] = useState([]);

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

	function onReceiptsListFormSubmited(event) {
		event.preventDefault();
		const dateFromParam = getMsFromDateString(dateFrom) || 0;
		const dateToParam = getMsFromDateString(dateTo) || "";
		const cardUuidParam = cardUuid;
		getReceipts(dateFromParam, dateToParam, cardUuidParam).then(setReceipts);
	}

	return (
		<>
			<Form className="receipts-list-form" onSubmit={onReceiptsListFormSubmited}>
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
					Получить чеки
				</Button>
			</Form>
			{receipts.length === 0 ? "" : <ReceiptList receipts={receipts}/>}
		</>
	)
};