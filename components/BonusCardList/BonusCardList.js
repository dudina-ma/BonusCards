import React, {useEffect, useState} from "react";
import BonusCard from "../BonusCard/BonusCard";
import './BonusCardList.less';
import { getCards } from '../../helpers/api';

export default function BonusCardList() {
	const [cards, setCards] = useState([]);

	useEffect(() => { getCards().then(setCards) }, []);

	return cards.map((card) => <BonusCard key={card.uuid} card={card} />);
}
