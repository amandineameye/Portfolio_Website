import NavBar from "./NavBar";
import About from "./Articles/About";
import Skills from "./Articles/Skills";
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
		Skills: <Skills />,
		Resume: <Resume />,
		Portfolio: <Portfolio />,
		Contact: <Contact />,
	};

	return (
		<div className="main-content">
			<NavBar onButtonClick={handleButtonClick} activePage={activePage} />
			{pages[activePage]}
		</div>
	);
};

export default MainContent;
