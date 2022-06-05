import React, {useEffect, useState} from "react";
import BonusCard from "../BonusCard/BonusCard";
import { getCards } from '../../helpers/api';

export default function BonusCardsPage() {
	const [cards, setCards] = useState([]);

	useEffect(() => { getCards().then(setCards) }, []);

	return cards.map((card) => <BonusCard key={card.uuid} card={card} />);
}
