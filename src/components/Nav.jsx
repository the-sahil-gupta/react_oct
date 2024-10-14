import { Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Services from './Services';

const Nav = () => {
	return (
		<div className="flex gap-x-4">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/services">Services</Link>
		</div>
	);
};

export default Nav;
