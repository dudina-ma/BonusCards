import React from "react";
import './TransactionList.less';
import Transaction from "../Transaction/Transaction";

export default function TransactionList(props) {
	return props.transactions.map((transaction) => <Transaction key={transaction.uuid} transaction={transaction} />);
}