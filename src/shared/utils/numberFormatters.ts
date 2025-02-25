export const leadingZeroFormat = (num: number) => {
	if(!Number.isInteger(num) || num <= 0) return 0;
	return num.toString().padStart(2, '0');
};