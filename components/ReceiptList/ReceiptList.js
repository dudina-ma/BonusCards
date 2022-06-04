import React, { useState, useEffect } from "react";
import Receipt from "../Receipt/Receipt";
import './ReceiptList.less';
import { getReceipts } from '../../helpers/api';

export default function ReceiptList() {
	const [receipts, setReceipts] = useState([]);

	useEffect(() => { getReceipts().then(setReceipts) }, []);

	return receipts.map((receipt) => <Receipt key={receipt.uuid} receipt={receipt} />);
}