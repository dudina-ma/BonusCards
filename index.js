import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BonusCardsPage from './components/BonusCardsPage/BonusCardsPage';
import Header from './components/Header/Header';
import ReceiptsPage from './components/ReceiptsPage/ReceiptsPage';
import TransactionsPage from './components/TransactionsPage/TransactionsPage';
import { Container } from 'reactstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.Fragment>
		<BrowserRouter>
			<Container>
				<Header />
				<Routes>
					<Route path="/" element={<BonusCardsPage />} />
					<Route path="/receipts" element={<ReceiptsPage />} />
					<Route path="/transactions" element={<TransactionsPage />} />
				</Routes>
			</Container>
		</BrowserRouter>
	</React.Fragment>
);