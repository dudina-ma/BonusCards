export default function getMsFromDateString(dateString) {
	const date = new Date(dateString);
	return Math.trunc(date.getTime() / 1000);
}