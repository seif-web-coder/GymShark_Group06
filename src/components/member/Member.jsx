import styles from "./Member.module.css";


const getRandomColor = () => {
	const colors = ["#FF5733", "#33A1FF", "#FF33A8", "#33FF57", "#FFA533"];
	return colors[Math.floor(Math.random() * colors.length)];
};

const Member = ({ name, description, image }) => {
	const avatarColor = getRandomColor();
	const initials = name ? name.charAt(0).toUpperCase() : "?";

	return (
		<div className={styles.card}>
			<div className={styles.avatarContainer}>
				{image ? (
					<img src={image} alt={name} className={styles.avatarImage} />
				) : (
					<div
						className={styles.avatarPlaceholder}
						style={{ backgroundColor: avatarColor }}
					>
						{initials}
					</div>
				)}
			</div>
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.description}>{description}</p>
			<button className={styles.button}>Voir Profil</button>
		</div>
	);
};

export default Member;
