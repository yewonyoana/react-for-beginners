import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterList({ id, thumbnail, name }) {
	return (
		<div key={id}>
			<Link to={`/character/${id}`}>
				<div>
					<img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
				</div>
				<div>{name}</div>
			</Link>
		</div>
	);
}

CharacterList.propTypes = {
	id: PropTypes.number.isRequired,
	thumbnail: PropTypes.object.isRequired,
	name: PropTypes.object.isRequired,
};

export default CharacterList;
