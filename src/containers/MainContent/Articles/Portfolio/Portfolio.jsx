import { useState } from "react";
import projects from "./data/projects";
import FilterList from "./FilterList";
import FilterSelectBox from "./FilterSelectBox";
import ProjectList from "./ProjectList";

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
				<FilterSelectBox onFilter={handleFilter} activeFilter={activeFilter} />
				<ProjectList displayedProjects={displayedProjects} />
			</section>
		</article>
	);
};

export default Portfolio;
