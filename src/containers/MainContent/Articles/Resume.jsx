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
			title: "University school of the arts",
			date: "2007 — 2008",
			description:
				"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
		},
		{
			title: "New york academy of art",
			date: "2006 — 2007",
			description:
				"Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
		},
		{
			title: "High school of art and design",
			date: "2002 — 2004",
			description:
				"Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
		},
	];

	const experience = [
		{
			title: "Creative director",
			date: "2015 — Present",
			description:
				"Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
		},
		{
			title: "Art director",
			date: "2013 — 2015",
			description:
				"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
		},
		{
			title: "Web designer",
			date: "2010 — 2013",
			description:
				"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
		},
	];

	return (
		<article className="resume active">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>
			<TimelineSection
				icon="book-outline"
				title="Education"
				items={education}
			/>
			<TimelineSection
				icon="book-outline"
				title="Experience"
				items={experience}
			/>
		</article>
	);
};

export default Resume;
