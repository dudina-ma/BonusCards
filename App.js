import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BonusCardList from './components/BonusCardList/BonusCardList';
import Header from './components/Header/Header';
import ReceiptList from './components/ReceiptList/ReceiptList';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<BonusCardList />} />
				<Route path="/receipts" element={<ReceiptList />} />
			</Routes>
		</>
	)
};