const SocialItem = ({ icon = "", link = "" }) => {
	return (
		<li className="social-item">
			<a href={link} className="social-link" target="_blank">
				<ion-icon name={icon}></ion-icon>
			</a>
		</li>
	);
};

export default SocialItem;
