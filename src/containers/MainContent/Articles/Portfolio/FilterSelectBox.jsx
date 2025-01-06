import { useState, useEffect } from "react";
import clsx from "clsx";
import filterCategories from "./data/filterCategories.js";

const FilterSelectBox = ({ onFilter = () => {}, activeFilter = "" }) => {
	const [isActive, setIsActive] = useState(false);

	const handleArrowClick = () => {
		setIsActive((prevValue) => {
			return !prevValue;
		});
	};

	const handleOptionClick = (category) => {
		onFilter(category);
		setIsActive(false);
	};

	useEffect(() => {
		//Media query that hides the component
		const mediaQuery = window.matchMedia("(min-width: 768px)");

		// Resets "isActive" when media query matches
		const handleMediaQueryChange = (e) => {
			if (e.matches) {
				setIsActive(false);
			}
		};
		// Add event listener for media query changes
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<div className="filter-select-box">
			<button
				className={clsx("filter-select", { active: isActive })}
				onClick={handleArrowClick}
			>
				<div className="select-value">{activeFilter}</div>
				<div className="select-icon">
					<ion-icon name="chevron-down"></ion-icon>
				</div>
			</button>

			<ul className="select-list">
				{filterCategories.map((category) => {
					return (
						<li className="select-item">
							<button
								onClick={() => {
									handleOptionClick(category);
								}}
							>
								{category}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default FilterSelectBox;
