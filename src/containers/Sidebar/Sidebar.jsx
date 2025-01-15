import { useState } from "react";
import SidebarInfo from "./SidebarInfo";
import SidebarInfoMore from "./SidebarInfoMore";
import clsx from "clsx";

const Sidebar = () => {
	const [isActive, setActive] = useState(false);

	const handleShowContacts = () => {
		setActive((prevValue) => {
			return !prevValue;
		});
	};
	return (
		<>
			<aside className={clsx("sidebar", { active: isActive })}>
				<SidebarInfo handleShowContacts={handleShowContacts} />
				<SidebarInfoMore />
			</aside>
		</>
	);
};

export default Sidebar;
