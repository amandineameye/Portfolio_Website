const FilterList = () => {
	return (
		<ul className="filter-list">
			<li className="filter-item">
				<button className="active">All</button>
			</li>

			<li className="filter-item">
				<button>React.js</button>
			</li>

			<li className="filter-item">
				<button>Node.js</button>
			</li>

			<li className="filter-item">
				<button>Vanilla JS</button>
			</li>
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
				<li className="select-item">
					<button>All</button>
				</li>

				<li className="select-item">
					<button>Web design</button>
				</li>

				<li className="select-item">
					<button>Applications</button>
				</li>

				<li className="select-item">
					<button>Web development</button>
				</li>
			</ul>
		</div>
	);
};

const Project = ({ projectTitle = "", projectCategory = "", imgLink = "" }) => {
	return (
		<li className="project-item  active">
			<a href="#">
				<figure className="project-img">
					<div className="project-item-icon-box">
						<ion-icon name="eye-outline"></ion-icon>
					</div>
				</figure>

				<h3 className="project-title">{projectTitle}</h3>

				<p className="project-category">{projectCategory}</p>
			</a>
		</li>
	);
};

const ProjectList = () => {
	return (
		<ul className="project-list">
			<Project
				projectTitle="Carbon Quest"
				projectCategory="React.js, Node.js, MongoDB"
			/>
			<Project
				projectTitle="Diabestie"
				projectCategory="React.js, Node.js, MongoDB, Redux"
			/>
			<Project projectTitle="Personal Portfolio" projectCategory="React.js" />
			<Project projectTitle="MasterMind" projectCategory="Vanilla JS" />
			<Project projectTitle="Harry Potter Quiz" projectCategory="Vanilla JS" />
		</ul>
	);
};

const Portfolio = () => {
	return (
		<article className="portfolio">
			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				<FilterList />
				<FilterSelectBox />
				<ProjectList />
			</section>
		</article>
	);
};

export default Portfolio;
