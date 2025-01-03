const Location = () => {
	return (
		<>
			<address>Saintes, Belgium</address>
		</>
	);
};

const Birthday = () => {
	return (
		<>
			<time datetime="1998-02-21">February 21, 1998</time>
		</>
	);
};

const Link = ({ link = "", linkContent = "" }) => {
	return (
		<>
			<a href={link} class="contact-link">
				{linkContent}
			</a>
		</>
	);
};

const ContactItem = ({
	icon = "",
	contactType = "",
	link = "",
	linkContent = "",
}) => {
	return (
		<li className="contact-item">
			<div className="icon-box">
				<ion-icon name={icon}></ion-icon>
			</div>

			<div className="contact-info">
				<p className="contact-title">{contactType}</p>
				{(contactType === "Email" || contactType === "Phone") && (
					<Link link={link} linkContent={linkContent} />
				)}
				{contactType === "Birthday" && <Birthday />}
				{contactType === "Location" && <Location />}
			</div>
		</li>
	);
};

export default ContactItem;
