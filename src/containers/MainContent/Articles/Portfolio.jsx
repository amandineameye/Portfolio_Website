import { useState, useEffect } from "react";
import clsx from "clsx";

const filterCategories = ["All", "React.js", "Node.js", "Vanilla JS"];
const projects = [
	{
		projectTitle: "Diabestie",
		projectCategory: "React.js, Node.js, MongoDB, Redux",
		imgLink: "/pictures/new_DB.png",
		gitHubLink: "https://github.com/amandineameye/Diabestie_React",
	},
	{
		projectTitle: "Carbon Quest",
		projectCategory: "React.js, Node.js, MongoDB, Unity, C#",
		imgLink: "/pictures/new_CQ.png",
		gitHubLink: "https://github.com/amandineameye/Carbon_Quest",
		webLink: "https://super-carbon-quest.vercel.app/",
	},

	{
		projectTitle: "Portfolio Website",
		projectCategory: "React.js",
		imgLink: "/pictures/new_PF.png",
		gitHubLink: "https://github.com/amandineameye/Portfolio",
	},
	{
		projectTitle: "Mastermind",
		projectCategory: "Vanilla JS",
		imgLink: "/pictures/new_MM.png",
		gitHubLink: "https://github.com/amandineameye/Exos_JS/tree/main/Mastermind",
		webLink: "https://mastermindamandine.vercel.app/",
	},

	{
		projectTitle: "Diabest Friend",
		projectCategory: "Vanilla JS",
		imgLink: "/pictures/new_DF.png",
		gitHubLink: "https://github.com/amandineameye/Diabest_Friend",
	},
	{
		projectTitle: "Harry Potter Quiz",
		projectCategory: "Vanilla JS",
		imgLink: "/pictures/new_HP1.png",
		gitHubLink: "https://github.com/amandineameye/Quizz_Harry_Potter",
	},
];

const FilterList = ({ onFilter = () => {}, activeFilter = "" }) => {
	return (
		<ul className="filter-list">
			{/* rajouter active classname au bon bouton */}

			{filterCategories.map((category) => {
				return (
					<li className="filter-item">
						<button
							className={clsx({ active: category === activeFilter })}
							onClick={() => {
								onFilter(category);
							}}
						>
							{category}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

const FilterSelectBox = () => {
	return (
		<div className="filter-select-box">
			<button className="filter-select">
				<div className="select-value">Select category</div>
				<div className="select-icon">
					<ion-icon name="chevron-down"></ion-icon>
				</div>
			</button>

			<ul className="select-list">
				{filterCategories.map((category) => {
					return (
						<li className="select-item">
							<button>{category}</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const HoverContainer = ({ webLink = "", gitHubLink = "" }) => {
	return (
		<div className="project-item-icon-container">
			<a href={webLink} target="_blank">
				<div className="project-item-icon-box">
					<ion-icon name="eye-outline"></ion-icon>
				</div>
			</a>

			<a href={gitHubLink} target="_blank">
				<div className="project-item-icon-box">
					<ion-icon name="logo-github"></ion-icon>
				</div>
			</a>
		</div>
	);
};

const Project = ({
	projectTitle = "",
	projectCategory = "",
	imgLink = "",
	webLink = "",
	gitHubLink = "",
}) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		// To make the li not have active classname for a slight moment to allow the animation to work smoothly
		const timer = setTimeout(() => setIsActive(true), 50);
		return () => clearTimeout(timer);
	}, []);

	return (
		<li className={clsx("project-item", { active: isActive })}>
			<div>
				<figure className="project-img">
					<HoverContainer webLink={webLink} gitHubLink={gitHubLink} />
					<img src={imgLink} alt={projectTitle} loading="lazy" />
				</figure>

				<h3 className="project-title">{projectTitle}</h3>
				<p className="project-category">{projectCategory}</p>
			</div>
		</li>
	);
};

const ProjectList = ({ displayedProjects = [] }) => {
	return (
		<ul className="project-list">
			{displayedProjects.map((project) => {
				return <Project {...project} />;
			})}
		</ul>
	);
};

const Portfolio = () => {
	const [displayedProjects, setDisplayedProjects] = useState(projects);
	const [activeFilter, setActiveFilter] = useState("All");

	const handleFilter = (category) => {
		let filteredProjects;
		if (category === "All") {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter((project) => {
				return project.projectCategory.includes(category);
			});
		}
		setDisplayedProjects(filteredProjects);
		setActiveFilter(category);
	};

	return (
		<article className="portfolio">
			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				<FilterList onFilter={handleFilter} activeFilter={activeFilter} />
				<FilterSelectBox />
				<ProjectList displayedProjects={displayedProjects} />
			</section>
		</article>
	);
};

export default Portfolio;
