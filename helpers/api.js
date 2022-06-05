export function getCards() {
	return fetch('https://bonus-test.evoapp.ru/api/3rdparty/card', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Authorization': 'b7d5ea70-5290-4d3c-9dd0-722d74ef9960',
			},
	}).then(response => response.json());
};

export function getReceipts() {
	return fetch('https://bonus-test.evoapp.ru/api/3rdparty/receipt?from=0', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Authorization': 'b7d5ea70-5290-4d3c-9dd0-722d74ef9960',
			},
	}).then(response => response.json());
};

export function getTransactions(dateFrom, dateTo, cardUuid) {
	const dateToParamString = dateTo === "" ? "" : ("&to=" + dateTo);
	const url = "https://bonus-test.evoapp.ru/api/3rdparty/transaction?from=" + dateFrom + dateToParamString + "&card_uuid=" + cardUuid;
	return fetch(url, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Authorization': 'b7d5ea70-5290-4d3c-9dd0-722d74ef9960',
			},
	}).then(response => response.json());
};