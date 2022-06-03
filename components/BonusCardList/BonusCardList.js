import React, {useEffect, useState} from "react";
import BonusCard from "../BonusCard/BonusCard";
import './BonusCardList.less';

export default function BonusCardList() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch('https://bonus-test.evoapp.ru/api/3rdparty/card', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Authorization': 'b7d5ea70-5290-4d3c-9dd0-722d74ef9960',
			},
		}).then(response => response.json()
		).then(setCards)
	}, []);

	return cards.map((card) => <BonusCard key={card.uuid} card={card} />);
}
