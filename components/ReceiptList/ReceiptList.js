import React from "react";
import Receipt from "../Receipt/Receipt";
import { Alert } from 'reactstrap';
import './ReceiptList.less';

export default function ReceiptList(props) {
	if (props.receipts.length === 0) {
		return <Alert className="receipt-alert" color="primary">По данной карте за выбранный период нет чеков</Alert>;
	}
	return props.receipts.map((receipt) => <Receipt key={receipt.uuid} receipt={receipt} cards={props.cards}/>);
}