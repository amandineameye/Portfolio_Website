import { useState, useEffect } from "react";
import HoverProject from "./HoverProject";
import clsx from "clsx";

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
		const timer = setTimeout(() => setIsActive(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<li className={clsx("project-item", { active: isActive })}>
			<div>
				<figure className="project-img">
					<HoverProject webLink={webLink} gitHubLink={gitHubLink} />
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

export default ProjectList;
