import { Link, Outlet } from 'react-router-dom';

const List = () => {
	return (
		<>
			<div className="list-disc">
				<Link className="list-item" to="/list/item1">
					Item 1
				</Link>

				<Link className="list-item" to="/list/item2">
					Item 2
				</Link>

				<Link className="list-item" to="/list/item3">
					Item 3
				</Link>
			</div>
			<hr className="my-8 border-2 border-red-600 rounded" />
			<Outlet />
		</>
	);
};

export default List;
