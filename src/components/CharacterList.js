import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";

function CharacterList({ id, thumbnail, name }) {
	return (
		<div>
			<div key={id}>
				<Link to={`/character/${id}`}>
					<div className={styles.poster}>
						<img
							className={styles.homeImg}
							src={thumbnail.path + "." + thumbnail.extension}
							alt={name}
						/>
						<div className={styles.homeTitle}>{name}</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

CharacterList.propTypes = {
	id: PropTypes.number.isRequired,
	thumbnail: PropTypes.object.isRequired,
	name: PropTypes.object.isRequired,
};

export default CharacterList;
