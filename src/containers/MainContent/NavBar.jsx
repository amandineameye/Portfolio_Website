import clsx from "clsx";

const NavBarItem = ({ item = "", onButtonClick = () => {}, isActive = "" }) => {
	return (
		<li className="navbar-item">
			<button
				className={clsx("navbar-link", { active: isActive })}
				onClick={() => {
					onButtonClick(item);
				}}
			>
				{item}
			</button>
		</li>
	);
};

const NavBar = ({ onButtonClick = () => {}, activePage = "" }) => {
	const navItems = ["About", "Skills", "Resume", "Portfolio", "Contact"];
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				{navItems.map((item) => (
					<NavBarItem
						key={item}
						item={item}
						isActive={activePage === item}
						onButtonClick={onButtonClick}
					/>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
