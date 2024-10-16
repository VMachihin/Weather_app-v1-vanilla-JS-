import {
	inputSearch,
	buttonSearch,
	deleteButton,
	weatherDetailsList,
	sliderTabButtons,
	tabContent,
	sliderTabContentOneDay,
	sliderTabContentWeek,
} from "./constants.js";
import { weatherData } from "../mock/weatherData.js";
import {
	sliderWeatherDataOneDay,
	sliderWeatherDataWeek,
} from "../mock/slider-weatherData.js";
import { renderCardsDetails } from "../components/cardDetails.js";
import { renderCardInfoOneDay } from "../components/cardInfoOneDay.js";
import { renderCardInfoWeek } from "../components/cardInfoWeek.js";

document.addEventListener("DOMContentLoaded", () => {
	// Рендер weather-details
	weatherDetailsList.insertAdjacentHTML(
		"afterBegin",
		renderCardsDetails(weatherData).join("")
	);

	for (let i = 0; i < sliderTabButtons.length; i++) {
		sliderTabButtons[i].addEventListener("click", () => {
			//Удаляем активный класс у всех контейнеров слайдера
			tabContent.forEach((tab) => {
				tab.classList.remove("content_show");
			});
			// Удаляем активный класс у всех кнопок табов слайдера
			sliderTabButtons.forEach((button) => {
				button.classList.remove("is-current");
			});

			// Добавляем активный класс к текущей кнопке и табу
			sliderTabButtons[i].classList.add("is-current");
			tabContent[i].classList.add("content_show");
		});
	}

	sliderTabContentOneDay.insertAdjacentHTML(
		"afterBegin",
		renderCardInfoOneDay(sliderWeatherDataOneDay).join("")
	);
	sliderTabContentWeek.insertAdjacentHTML(
		"afterBegin",
		renderCardInfoWeek(sliderWeatherDataWeek).join("")
	);

	//
	inputSearch.addEventListener("input", (event) => {
		console.log(event.target.value);
		buttonSearch.style = "display: none";
		deleteButton.style = "display: block";

		if (event.target.value === "") {
			buttonSearch.style = "display: block";
			deleteButton.style = "display: none";
		}
	});
	//
	deleteButton.addEventListener("click", (event) => {
		event.preventDefault();

		inputSearch.value = "";
		buttonSearch.style = "display: block";
		deleteButton.style = "display: none";
	});
});
