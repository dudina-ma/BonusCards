import React from "react";
import Receipt from "../Receipt/Receipt";
import './ReceiptList.less';

export default function ReceiptList() {
	const receipts = [
		{
			"uuid": "0a27db53-6830-4108-8805-c159d33d545a",
			"account_id": "412",
			"user_uid": "01-000000000722610",
			"card_uuid": "f6a6b695-d248-4188-a5ed-376ba29e4136",
			"type": "SELL",
			"number": "30",
			"period": "1632478008",
			"total": "1000.00",
			"totalWithDiscount": "1000.00",
			"bonus": "100.00",
			"payment": "0.00",
			"store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"raw": null
		},
		{
			"uuid": "54f9f2af-a1d5-4c74-a522-01ed9d2ead59",
			"account_id": "412",
			"user_uid": "01-000000000722610",
			"card_uuid": "f6a6b695-d248-4188-a5ed-376ba29e4136",
			"type": "SELL",
			"number": "31",
			"period": "1632478554",
			"total": "1000.00",
			"totalWithDiscount": "500.00",
			"bonus": "50.00",
			"payment": "-500.00",
			"store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"raw": null
		},
		{
			"uuid": "5a3e0342-2fe3-4e70-b243-aacacaaaecf9",
			"account_id": "412",
			"user_uid": "01-000000000722610",
			"card_uuid": "f6a6b695-d248-4188-a5ed-376ba29e4136",
			"type": "SELL",
			"number": "581",
			"period": "1652418074",
			"total": "25490.00",
			"totalWithDiscount": "25490.00",
			"bonus": "382.35",
			"payment": "0.00",
			"store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"raw": null
		},
		{
			"uuid": "b95fcd6c-4a10-4406-836f-dcd9f2688085",
			"account_id": "412",
			"user_uid": "01-000000000722610",
			"card_uuid": "f6a6b695-d248-4188-a5ed-376ba29e4136",
			"type": "SELL",
			"number": "582",
			"period": "1652418167",
			"total": "25490.00",
			"totalWithDiscount": "25490.00",
			"bonus": "382.35",
			"payment": "0.00",
			"store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"raw": null
		},
		{
			"uuid": "de94d61f-04cb-4e7c-9e54-8c53e146b5a1",
			"account_id": "412",
			"user_uid": "01-000000000722610",
			"card_uuid": "f6a6b695-d248-4188-a5ed-376ba29e4136",
			"type": "SELL",
			"number": "29",
			"period": "1632477970",
			"total": "1000.00",
			"totalWithDiscount": "1000.00",
			"bonus": "100.00",
			"payment": "0.00",
			"store_uuid": "20190326-56C4-4098-8060-039C6BF50FC7",
			"raw": null
		}
	];

	return receipts.map((receipt) => <Receipt key={receipt.uuid} receipt={receipt} />);
}