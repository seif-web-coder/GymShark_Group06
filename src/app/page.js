import Member from "@/components/member/Member";

const members = [
	{   id: "1",
		name: "Djeddi Seif Eddine",
		description: "Coach en Musculation & Haltérophilie 🏋️‍♂️.",
		image: "/membre/seif.jpg",
	},
	{id: "2",
		name: "Boubacar Sidy Diallo",
		description: "Spécialiste en Cardio & Endurance 🏃‍♂️.",
		image: "/membre/boubacar.png",
	},
	{id: "3",
		name: "Lounis Ait Kadi",
		description: "Coach en CrossFit & Entraînements Fonctionnels 🔥.",
		image: "/membre/lounis.jpeg",
	},
	{id: "4",
		name: "René Dumont Dtiogo Kenjio",
		description: "Nutritionniste Sportif & Diététique 🥗.",
		image: "/membre/rene.jpeg",
	},
	{id: "5",
		name: "Salvator Mwesha Aganze",
		description: "Coach en Boxe & Sports de Combat 🥊.",
		image: "/membre/salvator.jpeg"
	},
];

export default function Home() {
	return (
		<div style={{ textAlign: "center", padding: "20px" }}>
			<h1>🏋️ Bienvenue chez GymShark - Repoussez vos limites ! 🦈</h1>
			<p>
				GymShark est l’espace ultime pour booster votre force, endurance et mental. 💪<br />
				Profitez d’équipements modernes, coachs experts & programmes personnalisés.<br />
				 Rejoignez-nous et transformez votre corps dès aujourd’hui ! 
			</p>

			<div style={{ marginTop: "20px", marginBottom: "40px" }}>
				<h2> Découvrez GymShark en Action !</h2>
				<div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
					<iframe
						width="800"
						height="450"
						src="/membre/Gymshark.mp4"
						title="Vidéo GymShark"
						allowFullScreen
						style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
					></iframe>
				</div>
			</div>

			{/* Section des coachs */}
			<h2> Rencontrez Nos Experts</h2>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "20px",
					justifyContent: "center",
				}}
			>
				{members.map((member, index) => (
					<Member key={index} {...member} />
				))}
			</div>
		</div>
	);
}
