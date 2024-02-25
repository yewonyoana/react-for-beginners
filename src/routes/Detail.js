import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	// using useParams will give the value of "movie/:id"
	const { id } = useParams();
	const getMovie = async () => {
		// fetching data from the api(=id)
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return <h1>Detail</h1>;
}

export default Detail;
