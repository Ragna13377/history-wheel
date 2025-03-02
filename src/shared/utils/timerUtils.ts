export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
	fn: F,
	delay: number
) => {
	let timeout: ReturnType<typeof setTimeout> | null = null;
	return (...args: Parameters<F>) => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};
