const inputSearch = document.querySelector(".search-form__input");
const buttonSearch = document.querySelector("#search");
const deleteButton = document.querySelector("#reset");
const weatherDetailsList = document.querySelector(".weather-details");
const sliderTabButtons = document.querySelectorAll(".slider__tab-button");
const tabContent = document.querySelectorAll(".slider__tab-content");
const sliderTabContentOneDay = document.querySelector(
	"#tabpanel-twenty_four_hours"
);
const sliderTabContentWeek = document.querySelector("#tabpanel-week");

export {
	inputSearch,
	buttonSearch,
	deleteButton,
	weatherDetailsList,
	sliderTabButtons,
	sliderTabContentOneDay,
	sliderTabContentWeek,
	tabContent,
};

console.log(deleteButton);
