import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [details, setDetails] = useState([]);
	const { id } = useParams();

	const getDetails = async () => {
		const json = await (
			await fetch(
				`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
			)
		).json();
		setDetails(json.data.results);
		setLoading(false);
	};
	useEffect(() => {
		getDetails();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{details.map((detail) => (
						<CharacterDetail
							key={detail.id}
							id={detail.id}
							name={detail.name}
							thumbnail={detail.thumbnail}
							comics={detail.comics}
							series={detail.series}
							stories={detail.stories}
							events={detail.events}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Detail;
