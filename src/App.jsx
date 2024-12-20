import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pagenotfound from './components/Pagenotfound';
import List from './components/LIst';
import ListItem from './components/Listitem';
import { useMemo, useState } from 'react';
import MemoDemo from './components/MemoDemo';

const App = () => {
	const [count, setCount] = useState(0);
	const [memodata, setmemodata] = useState('Memo data');
	const memodataHandler = () => {
		setmemodata('Memo data changed');
	};

	return (
		<div className="bg-zinc-700 h-screen pt-10">
			<div className="w-[80%] h-[80%] mx-auto p-10 bg-red-200 rounded-xl border-4 border-red-300   ">
				<Nav />
				<br />
				<hr />
				<h1 className="text-5xl font-bold">{count}</h1>
				<button
					onClick={() => {
						setCount(count + 1);
					}}
					className="px-4 py-2 rounded bg-red-100">
					Add 1
				</button>

				<MemoDemo memodata={memodata} memodataHandler={memodataHandler} />
				{/* <button
					onClick={() => {
						setmemodata('Memo data changed');
					}}
					className="px-4 py-2 rounded bg-red-100">
					Change Memo Data
				</button> */}
				<hr />
				<br />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					{/* <Route path="/list" element={<List />} />
				<Route path="/list/:i" element={<ListItem />} /> */}
					<Route path="/list" element={<List />}>
						<Route path="/list/:i" element={<ListItem />} />
						{/* the below one is also correct */}
						{/* <Route path=":i" element={<ListItem />} /> */}
					</Route>

					{/* for all the wild card routes "*" is used, and this last path should be written in the last of all routes */}
					<Route path="*" element={<Pagenotfound />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
