'use client';
import { useEffect, useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const increment = () => setCount(c => c + 1);
		const element = document.documentElement;
		element.addEventListener('click', increment);

		return () => element.removeEventListener('click', increment);
	}, []);

	useEffect(() => {
		const title = document.querySelector('title');
		title.innerHTML = `${count} clicks`;
	}, [count]);

	return <span>{count}</span>;
};
