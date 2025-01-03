import "./App.css";
import MainContent from "./containers/MainContent/MainContent";
import Sidebar from "./containers/Sidebar/Sidebar";

function App() {
	return (
		<main>
			<Sidebar />
			<MainContent />
		</main>
	);
}

export default App;
