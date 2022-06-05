import React from "react";
import Receipt from "../Receipt/Receipt";

export default function ReceiptList(props) {
	return props.receipts.map((receipt) => <Receipt key={receipt.uuid} receipt={receipt} />);
}