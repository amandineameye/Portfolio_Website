const svgImports = import.meta.glob("../../../assets/logos/*.svg", {
	eager: true, // Charge les fichiers immédiatement
	import: "ReactComponent", // Spécifie d'importer les composants React
});

// Créer un objet de logos avec les clés dérivées des noms de fichiers
const logos = Object.keys(svgImports).reduce((acc, path) => {
	const fileName = path.split("/").pop().replace(".svg", ""); // Extraire le nom sans extension
	acc[fileName] = svgImports[path];
	return acc;
}, {});

// Object.keys(svgImports) takes the svgImports object (that has paths as keys and React components as values) and makes an array out of the keys
//Then reduces that array into an object that is first empty
//For each key/path, filename is equal to the last element of the array that is the split version of the path (each item is what is between "/") where the .svg is replaced by ""
//object[property] = value -> creates a property called filename and the value is the reactComponent that corresponds to the path inside svgImport object.
//logos = the final object

// Composant Logo pour afficher un logo basé sur son nom
const Logo = ({ logoName, width = "50px", height = "50px" }) => {
	const LogoComponent = logos[logoName]; // Trouver le logo correspondant
	if (!LogoComponent) {
		console.warn(`Logo "${logoName}" introuvable.`);
		return null; // Si le logo n'existe pas, ne rien afficher
	}

	return <LogoComponent width={width} height={height} />; // Rendu avec dimensions
};

export default Logo;
