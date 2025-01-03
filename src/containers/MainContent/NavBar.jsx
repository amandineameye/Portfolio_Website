const NavBarItem = ({ item = "", onButtonClick = () => {} }) => {
	return (
		<li className="navbar-item">
			<button
				className="navbar-link"
				onClick={() => {
					onButtonClick(item);
				}}
			>
				{item}
			</button>
		</li>
	);
};

const NavBar = ({ onButtonClick = () => {} }) => {
	const navItems = ["About", "Resume", "Portfolio", "Contact"];
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				{navItems.map((item) => (
					<NavBarItem key={item} item={item} onButtonClick={onButtonClick} />
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
