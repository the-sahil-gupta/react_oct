import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pagenotfound from './components/Pagenotfound';
import List from './components/LIst';
import ListItem from './components/Listitem';

const App = () => {
	return (
		<div className="w-[80%] h-[80%] mt-10 mx-auto p-10 bg-red-200 rounded-xl border-4 border-red-300   ">
			<Nav />
			<br />
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
					{/* the blow one is also correct */}
					{/* <Route path=":i" element={<ListItem />} /> */}
				</Route>

				{/* for all the wild card routes "*" is used, and this last path should be written in the last of all routes */}
				<Route path="*" element={<Pagenotfound />} />
			</Routes>
		</div>
	);
};

export default App;
