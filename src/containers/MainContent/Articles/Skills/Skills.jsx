import Logo from "../Logo";

let tools = [
	{ logoName: "HTML", name: "HTML" },
	{ logoName: "CSS", name: "CSS" },
	{ logoName: "JavaScript", name: "JavaScript" },
	{ logoName: "TypeScript", name: "TypeScript" },
	{ logoName: "react", name: "React" },
	{ logoName: "redux", name: "Redux" },
	{ logoName: "Node.js", name: "Node.js" },
	{ logoName: "express", name: "Express" },
	{ logoName: "sass", name: "Sass" },
	{ logoName: "tailwind", name: "Tailwind" },
	{ logoName: "mongoDB", name: "MongoDB" },
	{ logoName: "git", name: "Git" },
	{ logoName: "gitHub", name: "GitHub" },
	{ logoName: "wordpress", name: "WordPress" },
	{ logoName: "figma", name: "Figma" },
];

const SkillBox = ({ name = "", logoName = "" }) => {
	return (
		<div className="skill-box">
			<Logo logoName={logoName} />

			<h4>{name}</h4>
		</div>
	);
};

const SkillBoxesContainer = () => {
	return (
		<div className="boxes-container">
			{tools.map((tool) => {
				return <SkillBox key={tool.name} {...tool} />;
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
