import React from "react";
import Transaction from "../Transaction/Transaction";
import './TransactionList.less';

export default function TransactionList() {
	const transactions = [
		{
			"uuid": "15deeb73-8e00-4119-bc70-6ebb6a8211cc",
			"account_id": "412",
			"card_uuid": "09690c4d-55e1-4e20-901a-37f580f95657",
			"delta": "100.00",
			"state": "commited",
			"period": "1652421842",
			"period_activate": null,
			"user_uid": null,
			"store_uuid": null,
			"device_uuid": null,
			"receipt_uuid": null,
			"details": null,
			"comment": "Автоматическое начисление за 5 день недели."
		},
		{
			"uuid": "1f608963-581e-481e-8ea7-c3690806d68c",
			"account_id": "412",
			"card_uuid": "09690c4d-55e1-4e20-901a-37f580f95657",
			"delta": "100.00",
			"state": "commited",
			"period": "1653631464",
			"period_activate": null,
			"user_uid": null,
			"store_uuid": null,
			"device_uuid": null,
			"receipt_uuid": null,
			"details": null,
			"comment": "Автоматическое начисление за 5 день недели."
		},
		{
			"uuid": "a5206eba-8d5c-44db-bbf5-fe67bcdf0f6e",
			"account_id": "412",
			"card_uuid": "09690c4d-55e1-4e20-901a-37f580f95657",
			"delta": "1650.00",
			"state": "commited",
			"period": "1638586494",
			"period_activate": null,
			"user_uid": "01-000000000722610",
			"store_uuid": null,
			"device_uuid": null,
			"receipt_uuid": null,
			"details": null,
			"comment": "Импорт"
		},
		{
			"uuid": "df4ca067-d39e-4648-8c13-b65d033c832d",
			"account_id": "412",
			"card_uuid": "09690c4d-55e1-4e20-901a-37f580f95657",
			"delta": "100.00",
			"state": "commited",
			"period": "1653026675",
			"period_activate": null,
			"user_uid": null,
			"store_uuid": null,
			"device_uuid": null,
			"receipt_uuid": null,
			"details": null,
			"comment": "Автоматическое начисление за 5 день недели."
		}
	];

	return transactions.map((transaction) => <Transaction key={transaction.uuid} transaction={transaction} />);
}