import styles from "./events.module.css";
import Card from "@/components/card/Card"; // Import du composant Card
import eventData from "@/data/eventData.json"; // Import des données

const pageEvents = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Calendrier des événements a GymShark 🏋️‍♂️ </h1>
			<div className={styles.description}>
			Découvrez les événements exclusifs de GymShark ! Que vous soyez passionné de musculation, cardio, boxe ou nutrition, notre calendrier est rempli de challenges sportifs, bootcamps intenses et séminaires experts. Rejoignez-nous pour pousser vos limites, apprendre des meilleurs coachs et vous surpasser.

			<br/>📅 Ne manquez aucun événement, préparez-vous à l’action ! 🚀🔥
			</div>
			<div className={styles.cardContainer}>
				{eventData.map((event) => (
					<Card
						key={event.id} // Clé unique pour React
						id={event.id}
						date={event.date}
						title={event.title}
						location={event.location}
						imageUrl={event.imageUrl}
						videoUrl={event.videoUrl} 
						showVideo={true}
					/>
				))}
			</div>
		</div>
	);
};

export default pageEvents;
