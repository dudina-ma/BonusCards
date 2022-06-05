const fetchConfig = {
	method: 'GET',
	mode: 'cors',
	headers: {
		'Accept': 'application/json',
		'Authorization': 'b7d5ea70-5290-4d3c-9dd0-722d74ef9960',
	}
};

const baseUrl = 'https://bonus-test.evoapp.ru/api/3rdparty';

export function getCards() {
	return fetch(baseUrl + '/card', fetchConfig).then(response => response.json());
};

export function getReceipts(dateFrom, dateTo, cardUuid) {
	const dateToParamString = dateTo === '' ? '' : ('&to=' + dateTo);
	const url = baseUrl + '/receipt?from=' + dateFrom + dateToParamString + (cardUuid == null ? "" : '&cardUuid=' + cardUuid);
	return fetch(url, fetchConfig).then(response => response.json());
};

export function getTransactions(dateFrom, dateTo, cardUuid) {
	const dateToParamString = dateTo === '' ? '' : ('&to=' + dateTo);
	const url = baseUrl + '/transaction?from=' + dateFrom + dateToParamString + '&card_uuid=' + cardUuid;
	return fetch(url, fetchConfig).then(response => response.json());
};