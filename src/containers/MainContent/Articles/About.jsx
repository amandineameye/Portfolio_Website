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
			<PassionsSection />
		</article>
	);
};

export default About;
