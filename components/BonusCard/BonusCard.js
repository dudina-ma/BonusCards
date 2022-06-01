import React from "react";
import './BonusCard.less';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default function BonusCard() {
	const card = {
		"uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		"type_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		"number": "string",
		"status": "active",
		"holder": "string",
		"phone": "12600519267",
		"birthdate": "2022-05-31",
		"created_date": 0,
		"created_user": "73-812088051296693",
		"created_store_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		"created_device_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		"sales": 0,
		"balance": 0
	};

	return (
		<div className="card">
			<Card>
				<CardBody>
					<CardTitle tag="h5">
						Card title 45678910
					</CardTitle>
					<CardSubtitle
						className="mb-2 text-muted"
						tag="h6"
					>
						Card subtitle
					</CardSubtitle>
					<CardText>
						!!! Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>
						Button
					</Button>
				</CardBody>
			</Card>
		</div>
	)
}