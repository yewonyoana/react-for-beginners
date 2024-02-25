import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

function Home() {
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
			)
		).json();
		setCharacters(json.data.results);
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
					{characters.map((character) => (
						<CharacterList
							id={character.id}
							key={character.id}
							thumbnail={character.thumbnail}
							name={character.name}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
