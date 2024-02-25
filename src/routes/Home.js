import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	// using async and await instead of then (refer to YouTube)
	const getMovies = async () => {
		// 1. fetch data from url, then get json from the data
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
			)
		).json();
		// 2. set json values to movies to change state
		setMovies(json.data.movies);
		// 3. set loading from true to false
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						// rendering the movie by sending the property to Movie.js
						<Movie
							key={movie.id}
							id={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
