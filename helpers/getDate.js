export default function getDate(s) {
	const ms = s * 1000;
	const date = new Date(ms);

	const dayString = ("0" + date.getDate()).slice(0, 2);
	const monthString = ("0" + (date.getMonth() + 1)).slice(0, 2);
	const yearString = date.getFullYear();

	const dateString = yearString + "-" + monthString + "-" + dayString;

	return dateString;
};