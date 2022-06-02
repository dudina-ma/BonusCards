import React from 'react';
import ReactDOM from 'react-dom/client';
import BonusCard from './components/BonusCard/BonusCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  <BonusCard />
  </React.StrictMode>
);