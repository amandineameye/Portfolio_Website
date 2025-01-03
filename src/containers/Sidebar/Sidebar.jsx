import SidebarInfo from "./SidebarInfo";
import SidebarInfoMore from "./SidebarInfoMore";

const Sidebar = () => {
	return (
		<>
			<aside className="sidebar">
				<SidebarInfo />
				<SidebarInfoMore />
			</aside>
		</>
	);
};

export default Sidebar;
