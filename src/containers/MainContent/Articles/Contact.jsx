const Contact = () => {
	return (
		<article className="contact">
			<header>
				<h2 className="h2 article-title">Contact</h2>
			</header>

			<section className="mapbox">
				<figure>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40426.378384248375!2d4.115208780357393!3d50.70790429019733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3b66ec7867c3b%3A0x1a9f8eb5e59ad153!2sSaintes%2C%201480%20Tubize!5e0!3m2!1sfr!2sbe!4v1735872024489!5m2!1sfr!2sbe"
						width="400"
						height="300"
						loading="lazy"
					></iframe>
				</figure>
			</section>
			<section clasName="contact-form">
				<h3 className="h3 form-title">Contact Form</h3>
				<form action="#" className="form">
					<div className="input-wrapper">
						<input
							type="text"
							name="fullname"
							className="form-input"
							placeholder="Full name"
							required
						/>

						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="Email address"
							required
						/>
					</div>

					<textarea
						name="message"
						className="form-input"
						placeholder="Your Message"
						required
					></textarea>

					<button className="form-btn" type="submit" disabled>
						<ion-icon name="paper-plane"></ion-icon>
						<span>Send Message</span>
					</button>
				</form>
			</section>
		</article>
	);
};

export default Contact;
