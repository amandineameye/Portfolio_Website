const TimelineItem = ({ title, date, description }) => (
	<li className="timeline-item">
		<h4 className="h4 timeline-item-title">{title}</h4>
		<span>{date}</span>
		<p className="timeline-text">{description}</p>
	</li>
);

const TimelineSection = ({ icon, title, items }) => (
	<section className="timeline">
		<div className="title-wrapper">
			<div className="icon-box">
				<ion-icon name={icon}></ion-icon>
			</div>
			<h3 className="h3">{title}</h3>
		</div>
		<ol className="timeline-list">
			{items.map((item, index) => (
				<TimelineItem
					key={index}
					title={item.title}
					date={item.date}
					description={item.description}
				/>
			))}
		</ol>
	</section>
);

const Resume = () => {
	const education = [
		{
			title: "Front-End Developer - Interface3 (Bruxelles)",
			date: "2024 — Present",
			description:
				"Programme de 14 mois axé sur le développement web avec JavaScript (ES6+) et React.js",
		},
		{
			title: "Master in Banking & Finance - Université de Saint-Gall (Suisse)",
			date: "2021 — 2022",
			description:
				"Classé 6e meilleur master de finance au monde par le Financial Times en 2021. Programme suspendu définitivement pour des raisons de santé et dans le cadre d’un projet de réorientation",
		},
		{
			title:
				"Bachelier en Business International - Université de Maastricht (Pays-Bas)",
			date: "2017 — 2021",
			description:
				"Moyenne générale: 17,4/20. Membre de la “Beta Gamma Sigma Society”, distinction réservée aux 10% meilleurs étudiants de la promotion. Échange universitaire à l'Université de Californie, campus de Santa Barbara (États-Unis)",
		},
		{
			title:
				"Anglais intensif - International Language Academy of Canada (Canada)",
			date: "2016 — 2017",
			description:
				"Cours théoriques avancés et participation à des tables de conversation. Immersion totale d’un trimestre à l’Université Capilano (Vancouver)",
		},
		{
			title: "CESS - Collège Saint-Augustin (Enghien)",
			date: "2009 — 2016",
			description:
				"Options: Latin et Mathématiques. Immersion Néerlandais durant 4 ans",
		},
	];

	const experience = [
		{
			title: "Hackathon - Interface3",
			date: "10/2024",
			description:
				"Développement d'un jeu en équipe pluridisciplinaire (game developers, back-end et front-end developers). Réalisation du front-end et résolution autonome de bugs en Unity et C# malgré l’absence de connaissances préalables dans ces technologies",
		},
		{
			title: "Employée polyvalente - Louis Delhaize",
			date: "03/2023 — 11/2023",
			description:
				"Mise en place, vente des produits, gestion du stock et du point relais",
		},
		{
			title:
				"CFA Research Challenge et Sustainable Investment Challenge - Université de Saint-Gall",
			date: "11/2021",
			description:
				"Élaboration de recommandations d'investissement basées sur des recherches financières et présentation devant un jury d'experts",
		},
		{
			title: "Stage en Business Analysis - Medtronic",
			date: "04/2021 - 08/2021",
			description:
				"Analyse de statistiques liées aux technologies pour diabétiques et identification des tendances. Création de rapports réguliers pour appuyer la prise de décision",
		},
		{
			title: "Mentor - Université de Maastricht",
			date: "09/2020 – 06/2021",
			description:
				"Accompagnement d’un groupe de 10 étudiants de 1e année pour faciliter leur réussite académique et leur intégration à la vie universitaire",
		},
		{
			title: "Assistante universitaire - Université de Maastricht",
			date: "09/2018 – 06/2019",
			description:
				"Supervision de 3 classes d’étudiants de 1e année Bachelier en Mathématiques et Statistiques. Correction des exercices et évaluations, clarification des concepts complexes. Collaboration avec le professeur pour optimiser le contenu et la méthodologie du cours",
		},
		{
			title: "Tutrice - Grade Boost",
			date: "01/2018 – 06/2019",
			description:
				"Dispense de cours de soutien aux étudiants de 1re et 2e année de Bachelier en Finance, Comptabilité, Économie, Mathématiques, et Statistiques",
		},

		{
			title: "Volontaire - AIESEC India",
			date: "06/2018 – 07/2018",
			description:
				"Animation d’ateliers sur l’environnement dans des écoles de Bombay. Organisation de campagnes de sensibilisation au recyclage avec des partenaires locaux et une équipe internationale",
		},
		{
			title: "Députée - Parlement Jeunesse de la Fédération Wallonie-Bruxelles",
			date: "02/2016",
			description:
				"Participation à une simulation parlementaire immersive. Contribution active aux débats, rédaction d’amendements et votes sur 4 projets de décrets fictifs",
		},
	];

	return (
		<article className="resume">
			<header>
				<h2 className="h2 article-title resume-title">
					Resume{" "}
					<a
						href="/files/Amandine-Ameye_Resume.pdf"
						download="Amandine_Ameye_resume.pdf"
					>
						<ion-icon name="download-outline"></ion-icon>
					</a>
				</h2>
			</header>
			<TimelineSection
				icon="book-outline"
				title="Education"
				items={education}
			/>
			<TimelineSection
				icon="hammer-outline"
				title="Activities and Experience"
				items={experience}
			/>
		</article>
	);
};

export default Resume;
