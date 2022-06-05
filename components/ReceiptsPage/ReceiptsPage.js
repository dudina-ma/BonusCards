import React, { useState, useEffect } from "react";
import Receipt from "../Receipt/Receipt";
import './ReceiptsPage.less';
import { getReceipts } from '../../helpers/api';

export default function ReceiptsPage() {
	const [receipts, setReceipts] = useState([]);

	useEffect(() => { getReceipts().then(setReceipts) }, []);

	return receipts.map((receipt) => <Receipt key={receipt.uuid} receipt={receipt} />);
}