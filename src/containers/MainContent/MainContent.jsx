import NavBar from "./NavBar";
import About from "./Articles/About";
import Resume from "./Articles/Resume";
import Portfolio from "./Articles/Portfolio";
import Contact from "./Articles/Contact";
import { useState } from "react";

const MainContent = () => {
	const [activePage, setActivePage] = useState("Resume");

	const handleButtonClick = (page) => {
		setActivePage(page);
	};

	const pages = {
		About: <About />,
		Resume: <Resume />,
		Portfolio: <Portfolio />,
		Contact: <Contact />,
	};

	return (
		<div className="main-content">
			<NavBar onButtonClick={handleButtonClick} />
			{pages[activePage]}
		</div>
	);
};

export default MainContent;
