const ShowContactsBtn = ({ handleShowContacts = () => {} }) => {
	return (
		<button className="info_more-btn" onClick={handleShowContacts}>
			<span>Show Contacts</span>
			<ion-icon name="chevron-down"></ion-icon>
		</button>
	);
};

const SidebarInfo = ({ handleShowContacts = () => {} }) => {
	return (
		<div className="sidebar-info">
			<figure className="avatar-box">
				<img src="/pictures/profile1.png" alt="photo d'Amandine Ameye" />
			</figure>
			<div className="info-content">
				<h1 className="name">Amandine Ameye</h1>
				<p className="title">Web Developer</p>
			</div>
			<ShowContactsBtn handleShowContacts={handleShowContacts} />
		</div>
	);
};

export default SidebarInfo;


// srcSet="/pictures/profile1.png, /pictures/profile2.png, /pictures/profile3.png, /pictures/profile4.png" 

