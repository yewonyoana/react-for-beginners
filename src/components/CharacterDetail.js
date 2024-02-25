import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterDetail({
	id,
	thumbnail,
	name,
	comics,
	series,
	stories,
	events,
}) {
	return (
		<div key={id}>
			<section>
				<div>
					<div>
						<Link to={`/`}>Return</Link>
					</div>
					<h1>{name}</h1>
					<img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
				</div>
				<div>
					<h2>Comics</h2>
					<ul>
						{comics.items.map((item) => (
							<li key={item.name}>{item.name}</li>
						))}
					</ul>
					<h2>Series</h2>
					<ul>
						{series.items.map((item) => (
							<li key={item.name}>{item.name}</li>
						))}
					</ul>
					<h2>Stories</h2>
					<ul>
						{stories.items.map((item) => (
							<li key={item.name}>{item.name}</li>
						))}
					</ul>
					<h2>Events</h2>
					<ul>
						{events.items.map((item) => (
							<li key={item.name}>{item.name}</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
}

CharacterDetail.prototype = {
	id: PropTypes.number.isRequired,
	thumbnail: PropTypes.object.isRequired,
	name: PropTypes.object.isRequired,
	comics: PropTypes.object.isRequired,
	series: PropTypes.object.isRequired,
	stories: PropTypes.object.isRequired,
	events: PropTypes.object.isRequired,
};

export default CharacterDetail;
