import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ListItem = () => {
	const navigate = useNavigate();
	const params = useParams();
	// const location = useLocation(); // Abhi kaam nhi aayega baad me kaam aayega
	// console.log(location); // search, hash, pathname

	return (
		<>
			<h1 className="text-2xl">{params.i}</h1>
			<button
				onClick={() => navigate(-1)}
				className="mt-4 py-2 px-4 bg-red-100 rounded">
				Back
			</button>
		</>
	);
};

export default ListItem;
