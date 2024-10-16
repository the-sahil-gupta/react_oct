import { Link } from 'react-router-dom';

const List = () => {
	return (
		<div className="list-disc flex flex-col">
			<li>
				<Link to="/list/item1" className="list">
					Item 1
				</Link>
			</li>
			<li>
				<Link to="/list/item2" className="list">
					Item 2
				</Link>
			</li>
			<li>
				<Link to="/list/item3" className="list">
					Item 3
				</Link>
			</li>
		</div>
	);
};

export default List;
