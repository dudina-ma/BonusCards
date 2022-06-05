import React from "react";
import './TransactionList.less';
import { Alert } from 'reactstrap';
import Transaction from "../Transaction/Transaction";

export default function TransactionList(props) {
	if (props.transactions.length === 0) {
		return <Alert className="transaction-alert" color="primary">По данной карте за выбранный период нет транзакций</Alert>;
	}
	return props.transactions.map((transaction) => <Transaction key={transaction.uuid} transaction={transaction}/>);
}