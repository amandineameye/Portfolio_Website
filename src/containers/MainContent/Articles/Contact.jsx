import { useState } from "react";
import emailjs from "@emailjs/browser";
import Logo from "./Logo";

const Contact = () => {
	const [params, setParams] = useState({ name: "", email: "", message: "" });
	const [feedback, setFeedback] = useState("");

	const handleChange = (e) => {
		setParams((prevObject) => {
			return { ...prevObject, [e.target.name]: e.target.value };
		});
	};

	const closeModal = () => {
		setFeedback(""); // Close modal by clearing feedback
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const serviceId = "service_my_portfolio21";
		const templateId = "template_d3ni19v";
		const publicKey = "mDdBlmwe_CRwo8Dd2";

		// Create a new object that contains dynamic template params
		const templateParams = {
			from_name: params.name,
			from_email: params.email,
			to_name: "Amandine",
			message: params.message,
		};

		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log("Email sent successfully!", response);
				setParams({ name: "", email: "", message: "" });
				setFeedback("Message sent successfully!");
			})
			.catch((error) => {
				setFeedback("Failed to send message. Please try again.");
				console.error("Error sending email: ", error);
			});
	};

	return (
		<>
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
							title="Location Map"
							loading="lazy"
						></iframe>
					</figure>
				</section>
				<section className="contact-form">
					<h3 className="h3 form-title">Contact Form</h3>
					<form onSubmit={handleSubmit} className="form">
						<div className="input-wrapper">
							<input
								type="text"
								name="name"
								onChange={handleChange}
								value={params.name}
								className="form-input"
								placeholder="Full name"
								aria-label="Full name"
								required
							/>

							<input
								type="email"
								name="email"
								onChange={handleChange}
								value={params.email}
								className="form-input"
								placeholder="Email address"
								aria-label="Email address"
								required
							/>
						</div>

						<textarea
							name="message"
							onChange={handleChange}
							value={params.message}
							className="form-input"
							placeholder="Your Message"
							aria-label="Your Message"
							required
						></textarea>

						<button className="form-btn" type="submit">
							<ion-icon name="paper-plane"></ion-icon>
							<span>Send Message</span>
						</button>
					</form>
				</section>
			</article>
			{/* Modal */}
			{feedback && (
				<div className="email-modal">
					<div className="email-modal-content">
						<p>{feedback}</p>
						<button onClick={closeModal} className="email-modal-close-btn">
							<Logo logoName="close" width="27px" height="27px" />
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Contact;
