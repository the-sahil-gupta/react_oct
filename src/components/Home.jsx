import { memo, useMemo, useState } from 'react';

const Home = () => {
	const [count, setCount] = useState(0);

	const bigFunc = () => {
		for (let i = 0; i < 1000000000; i++) {}
	};
	const memoizedBigFunc = useMemo(bigFunc, []);
	return (
		<div>
			{memoizedBigFunc}
			<h5>Home khula</h5>
			<h1 className="text-5xl font-bold">{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
				className="px-4 py-2 rounded bg-red-100">
				Add 1
			</button>
		</div>
	);
};

export default Home;
