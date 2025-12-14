import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay = 300) => {
	const [debouncedValue, setDebouncedValue] = useState('');

	useEffect(() => {
		let timerId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(timerId);
	}, [value, delay]);

	return debouncedValue;
};
