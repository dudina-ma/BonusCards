import React, { useState } from "react";
import './BonusCard.less';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function BonusCard() {
	const cards = [
		{
			"uuid": "1c421e18-8cc6-4c42-b87c-9898d94cb428",
			"account_id": "412",
			"type_uuid": null,
			"number": "1",
			"status": "active",
			"holder": "Дальстрой!",
			"phone": "79504241345",
			"email": null,
			"birthdate": "1989-06-06",
			"sales": "0.00",
			"created_date": "1625036090",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "3184.16"
		},
		{
			"uuid": "f6a6b695-d248-4188-a5ed-376ba29e4136",
			"account_id": "412",
			"type_uuid": null,
			"number": "10",
			"status": "active",
			"holder": "Test",
			"phone": "79833636379",
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1628505993",
			"created_user": "01-000000000722610",
			"created_store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"created_device_uuid": "20210802-6AA1-405A-8043-F98DC82F25FA",
			"created_employee_uuid": "20180503-A84F-4063-801D-1BC0BED2F999",
			"balance": "6480.70"
		},
		{
			"uuid": "7b06bbc1-63d0-4764-a8da-51f252610dd3",
			"account_id": "412",
			"type_uuid": null,
			"number": "1001",
			"status": "active",
			"holder": null,
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1653580875",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "100.00"
		},
		{
			"uuid": "24126a2c-544f-4220-b733-72657688b2d3",
			"account_id": "412",
			"type_uuid": null,
			"number": "1002",
			"status": "active",
			"holder": null,
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1653586111",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "100.00"
		},
		{
			"uuid": "09690c4d-55e1-4e20-901a-37f580f95657",
			"account_id": "412",
			"type_uuid": null,
			"number": "1111",
			"status": "active",
			"holder": "Петров",
			"phone": null,
			"email": null,
			"birthdate": "1988-06-14",
			"sales": "16500.00",
			"created_date": "1637835531",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "1950.00"
		},
		{
			"uuid": "6e4fdf05-5f9c-4996-b4a0-87ee234ce1bc",
			"account_id": "412",
			"type_uuid": null,
			"number": "1112",
			"status": "active",
			"holder": "Иванов",
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1637835531",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "300.00"
		},
		{
			"uuid": "b323cdf2-1f2d-4f67-ab5f-755e275e2ad7",
			"account_id": "412",
			"type_uuid": null,
			"number": "20",
			"status": "active",
			"holder": null,
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1652785426",
			"created_user": "01-000000000722610",
			"created_store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"created_device_uuid": "20211012-8FB5-4066-80D4-E8264CF28B69",
			"created_employee_uuid": "20180503-A84F-4063-801D-1BC0BED2F999",
			"balance": "200.00"
		},
		{
			"uuid": "69af1271-1419-45bc-8eb6-119750be137f",
			"account_id": "412",
			"type_uuid": null,
			"number": "21",
			"status": "active",
			"holder": null,
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1652849582",
			"created_user": "01-000000000722610",
			"created_store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"created_device_uuid": "20211012-8FB5-4066-80D4-E8264CF28B69",
			"created_employee_uuid": "20180503-A84F-4063-801D-1BC0BED2F999",
			"balance": "200.00"
		},
		{
			"uuid": "8b7a8556-626a-46d2-88e5-747de3492c79",
			"account_id": "412",
			"type_uuid": null,
			"number": "22",
			"status": "active",
			"holder": null,
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1652849674",
			"created_user": "01-000000000722610",
			"created_store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"created_device_uuid": "20211012-8FB5-4066-80D4-E8264CF28B69",
			"created_employee_uuid": "20180503-A84F-4063-801D-1BC0BED2F999",
			"balance": "200.00"
		},
		{
			"uuid": "8de0aa20-b055-48e6-8d58-ed69d47ac6c4",
			"account_id": "412",
			"type_uuid": null,
			"number": "67890000",
			"status": "active",
			"holder": "Ковальков  Николай Федорович",
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1625036090",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "1031.48"
		},
		{
			"uuid": "bce9bc32-9913-4df5-bf06-acdd9b83de06",
			"account_id": "412",
			"type_uuid": null,
			"number": "890000000",
			"status": "active",
			"holder": "Алхимов А.А.",
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1625036090",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "2783.50"
		},
		{
			"uuid": "52b0a69d-9104-47a8-926e-3e85cbc3e759",
			"account_id": "412",
			"type_uuid": null,
			"number": "8900000000000",
			"status": "active",
			"holder": "Иванова Нина Юрьевна",
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1625036090",
			"created_user": "01-000000000722610",
			"created_store_uuid": null,
			"created_device_uuid": null,
			"created_employee_uuid": null,
			"balance": "409.24"
		},
		{
			"uuid": "fe8cd85b-8dbc-4ee5-9166-db6128b219e2",
			"account_id": "412",
			"type_uuid": null,
			"number": "9",
			"status": "blocked",
			"holder": null,
			"phone": null,
			"email": null,
			"birthdate": null,
			"sales": "0.00",
			"created_date": "1643251474",
			"created_user": "01-000000000722610",
			"created_store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"created_device_uuid": "20211012-8FB5-4066-80D4-E8264CF28B69",
			"created_employee_uuid": "20180503-A84F-4063-801D-1BC0BED2F999",
			"balance": "456.00"
		}
	];

	const cardDivs = cards.map((card) => {
		return (
			<div key={card.number} className="bonus-card">
				<Card>
					<CardBody>
						<CardTitle tag="h5">
							{card.number}
						</CardTitle>
						<CardSubtitle
							className="mb-2 text-muted"
							tag="h6"
						>
							{card.holder ? "Holder: " + card.holder : ""}
						</CardSubtitle>
						<CardText>
							<div className="card-field">{card.email ? "Email: " + card.email : ""}</div>
							<div className="card-field">{card.phone ? "Phone: " + card.phone : ""}</div>
							<div className="card-field">{card.birthdate ? "Birthdate: " + card.birthdate : ""}</div>
							<div className="card-field">{card.created_date ? "Created_date: " + card.created_date : ""}</div>
							<div className="card-field">{card.status ? "Status: " + card.status : ""}</div>
							<div className="card-field">{card.sales ? "Sales: " + card.sales : ""}</div>
							<div className="card-field">{card.balance ? "Balance: " + card.balance : ""}</div>
						</CardText>
						<Button tag="a" href="/ggg" className="get-transactions-btn">
							Get card transactions
						</Button>
					</CardBody>
				</Card>
			</div>
		)
	}
	);

	return cardDivs;
}

