const HoverProject = ({ webLink = "", gitHubLink = "" }) => {
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

export default HoverProject;
