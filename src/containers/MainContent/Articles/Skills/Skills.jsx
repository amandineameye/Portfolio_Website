import Logo from "../Logo";

const tools = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Redux",
	"Node.js",
	"Express",
	"Sass",
	"Tailwind",
	"MongoDB",
	"git",
	"GitHub",
	"WordPress",
	"Figma",
];

const SkillBox = ({ name = "" }) => {
	return (
		<div className="skill-box">
			<Logo logoName={name} />

			<h4>{name}</h4>
		</div>
	);
};

const SkillBoxesContainer = () => {
	return (
		<div className="boxes-container">
			{tools.map((tool) => {
				return <SkillBox key={tool} name={tool} />;
			})}
		</div>
	);
};

const languages = [
	{ name: "French", description: "Native language" },
	{ name: "English", description: "Fully fluent" },
	{
		name: "Dutch",
		description: "Excellent understanding",
	},
];

const LangBox = ({ name = "", description = "" }) => {
	return (
		<div className="lang-box">
			<h4>{name}</h4>
			<p>{description}</p>
		</div>
	);
};

const LangBoxesContainer = () => {
	return (
		<div className="lang-container">
			{languages.map((language) => {
				return <LangBox key={language.name} {...language} />;
			})}
		</div>
	);
};

const Skills = () => {
	return (
		<article>
			<header>
				<h2 className="h2 article-title">Skills</h2>
			</header>
			<SkillBoxesContainer />
			<h3 className="h3 lang-title">Languages</h3>
			<LangBoxesContainer />
		</article>
	);
};

export default Skills;
