import React from 'react';
import ReactDOM from 'react-dom/client';
import BonusCardList from './components/BonusCardList/BonusCardList';

import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionList from './components/TransactionList/TransactionList';
import ReceiptList from './components/ReceiptList/ReceiptList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  < BonusCardList />
	  < TransactionList />
	  < ReceiptList />
  </React.StrictMode>
);