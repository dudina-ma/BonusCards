import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BonusCardList from './components/BonusCardList/BonusCardList';
import Header from './components/Header/Header';
import ReceiptList from './components/ReceiptList/ReceiptList';
import TransactionList from './components/TransactionList/TransactionList';
import { Container } from 'reactstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Container>
				<Header />
				<Routes>
					<Route path="/" element={<BonusCardList />} />
					<Route path="/receipts" element={<ReceiptList />} />
					<Route path="/transactions" element={<TransactionList />} />
				</Routes>
			</Container>
		</BrowserRouter>
	</React.StrictMode>
);