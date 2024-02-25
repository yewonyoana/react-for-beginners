import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import styles from "../css/Home.module.css";

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
		<div className={styles.homeBody}>
			{loading ? (
				<h2 className={styles.loading}>Loading...</h2>
			) : (
				<div>
					<header className={styles.homeHeader}>
						<img src="https://rukminim2.flixcart.com/image/850/1000/jql8fbk0/poster/u/9/r/medium-pwl-wall-poster-13-19-inches-matte-finish-marvel-iron-man-original-imaek7kefasnynq8.jpeg?q=90&crop=false"></img>
					</header>
					<div className={styles.homeList}>
						{characters.map((character) => (
							<CharacterList
								id={character.id}
								key={character.id}
								thumbnail={character.thumbnail}
								name={character.name}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
