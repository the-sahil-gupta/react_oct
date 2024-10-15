import { useNavigate } from 'react-router-dom';

const Services = () => {
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		// some code
		navigate('/');
	};
	return (
		<div>
			<h1>Services khula</h1>
			<form onSubmit={submitHandler}>
				<button
					className="mt-4 py-2 px-4 bg-red-100 rounded"
					type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Services;
