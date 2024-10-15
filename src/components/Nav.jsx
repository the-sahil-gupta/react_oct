import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="flex gap-x-4">
			<NavLink
				style={(e) =>
					e.isActive ? { textDecoration: 'underline' } : {}
				}
				className={(e) => (e.isActive ? 'text-red-600' : '')}
				to="/">
				Home
			</NavLink>
			<NavLink
				style={(e) =>
					e.isActive ? { textDecoration: 'underline' } : {}
				}
				className={(e) => (e.isActive ? 'text-red-600' : '')}
				to="/about">
				About
			</NavLink>
			<NavLink
				style={(e) =>
					e.isActive ? { textDecoration: 'underline' } : {}
				}
				className={(e) => (e.isActive ? 'text-red-600' : '')}
				to="/services">
				Services
			</NavLink>
		</div>
	);
};

export default Nav;
