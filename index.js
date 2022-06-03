import React from 'react';
import ReactDOM from 'react-dom/client';
import BonusCardList from './components/BonusCardList/BonusCardList';

import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionList from './components/TransactionList/TransactionList';
import ReceiptList from './components/ReceiptList/ReceiptList';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<BonusCardList />
		<TransactionList />
		<ReceiptList />
	</React.StrictMode>
);