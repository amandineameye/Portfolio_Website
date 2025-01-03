const TextSection = () => {
	return (
		<section className="about-text">
			<p>
				Développeuse passionnée, je m'épanouis dans la résolution de défis
				techniques et la création d'applications intuitives qui simplifient la
				vie. Curieuse et autonome, j'apprends en continu tout en appréciant la
				richesse du travail en équipe.
			</p>

			<p>
				Mon objectif: Allier technique et créativité pour des expériences
				utilisateur optimales.
			</p>
		</section>
	);
};

const SkillsSection = () => {
	return (
		<section className="service">
			<h3 className="h3 service-title">My skills</h3>

			<ul className="service-list">
				<li className="service-item">
					<div className="service-icon-box"></div>

					<div className="service-content-box">
						<h4 className="h4 service-item-title">Web design</h4>

						<p className="service-item-text">
							The most modern and high-quality design made at a professional
							level.
						</p>
					</div>
				</li>

				<li className="service-item">
					<div className="service-icon-box"></div>

					<div className="service-content-box">
						<h4 className="h4 service-item-title">Web development</h4>

						<p className="service-item-text">
							High-quality development of sites at the professional level.
						</p>
					</div>
				</li>

				<li className="service-item">
					<div className="service-icon-box"></div>

					<div className="service-content-box">
						<h4 className="h4 service-item-title">Mobile apps</h4>

						<p className="service-item-text">
							Professional development of applications for iOS and Android.
						</p>
					</div>
				</li>

				<li className="service-item">
					<div className="service-icon-box"></div>

					<div className="service-content-box">
						<h4 className="h4 service-item-title">Photography</h4>

						<p className="service-item-text">
							I make high-quality photos of any category at a professional
							level.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

const PassionsSection = () => {
	return (
		<section className="testimonials">
			<h3 className="h3 testimonials-title">My Passions</h3>
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
			<SkillsSection />
			<PassionsSection />
		</article>
	);
};

export default About;
