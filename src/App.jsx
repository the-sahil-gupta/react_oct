import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pagenotfound from './components/Pagenotfound';

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

				<Route path="*" element={<Pagenotfound />} />
			</Routes>
		</div>
	);
};

export default App;
