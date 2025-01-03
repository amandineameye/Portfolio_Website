import ContactItem from "../../components/Sidebar/ContactItem";
import SocialItem from "../../components/Sidebar/SocialItem";

const SidebarInfoMore = () => {
	return (
		<div className="sidebar-info_more">
			<div className="separator"></div>
			<ul className="contacts-list">
				<ContactItem
					icon="mail-outline"
					contactType="Email"
					link="mailto:amandineameye@gmail.com"
					linkContent="amandineameye@gmail.com"
				/>
				<ContactItem
					icon="phone-portrait-outline"
					contactType="Phone"
					link="tel:+12133522795"
					linkContent="+32 455 15 85 81"
				/>
				<ContactItem icon="calendar-outline" contactType="Birthday" />
				<ContactItem icon="location-outline" contactType="Location" />
			</ul>
			<div className="separator"></div>
			<ul className="social-list">
				<SocialItem
					icon="logo-linkedin"
					link="https://www.linkedin.com/in/amandine-ameye/"
				/>
				<SocialItem
					icon="logo-github"
					link="https://github.com/amandineameye"
				/>
			</ul>
		</div>
	);
};

export default SidebarInfoMore;
