import Logo from "./Logo";

const TextSection = () => {
	return (
		<section className="about-text">
			<p>
			As a dedicated developer with a background in international business and finance, I discovered my passion for programming during my master’s studies — a turning point that led me to fully transition into tech. I completed an intensive training program focused on modern web technologies and frontend development.
			</p>
			<p>I currently work at the Smart Grids Lab at the University of Liège (Montefiore Institute), where I develop the front-end interface of a tool for energy system modeling and optimization. Commissioned by the Energy Directorate of the Belgian Federal Public Service for Economy, this project combines advanced research  with real-world impact in the energy sector.</p>
			<p>
			I'm now looking to collaborate with experienced developers, expand my skills, and contribute to meaningful projects.
			</p>
		</section>
	);
};

const passions = [
	{
		logoName: "puzzles",
		name: "Puzzles",
		description: "My go-to for relaxation and mental focus.",
	},
	{
		logoName: "escape_games",
		name: "Escape games",
		description: "Where teamwork meets logic under pressure — and fun!",
	},
	{
		logoName: "wordplay",
		name: "Pun-based humor",
		description: "I rarely go a day without cracking a wordplay joke.",
	},
	{
		logoName: "parodies",
		name: "Humorous song parodies",
		description:
			"Turning life’s twists into catchy, cathartic tunes.",
	},
];

const PassionBox = ({ logoName = "", name = "", description = "" }) => {
	return (
		<div className="passion-box">
			<Logo logoName={logoName} width="30px" height="30px" />
			<h4>{name}</h4>
			<p>{description}</p>
		</div>
	);
};

const PassionsContainer = () => {
	return (
		<div className="passions-container">
			{passions.map((passion) => {
				return <PassionBox key={passion.logoName} {...passion} />;
			})}
		</div>
	);
};

const PassionsSection = () => {
	return (
		<section className="passions">
			<h3 className="h3 passions-title">Side Quests</h3>
			<PassionsContainer />
		</section>
	);
};

const About = () => {
	return (
		<article className="about">
			<header>
				<h2 className="h2 article-title">About me</h2>
			</header>
			<TextSection />
			<PassionsSection />
		</article>
	);
};

export default About;
