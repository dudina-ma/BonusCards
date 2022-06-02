import React from 'react';
import ReactDOM from 'react-dom/client';
import BonusCardList from './components/BonusCardList/BonusCardList';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  <BonusCardList />
  </React.StrictMode>
);