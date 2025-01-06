import clsx from "clsx";
import filterCategories from "./data/filterCategories.js";

const FilterList = ({ onFilter = () => {}, activeFilter = "" }) => {
	return (
		<ul className="filter-list">
			{/* rajouter active classname au bon bouton */}

			{filterCategories.map((category) => {
				return (
					<li className="filter-item">
						<button
							className={clsx({ active: category === activeFilter })}
							onClick={() => {
								onFilter(category);
							}}
						>
							{category}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default FilterList;
