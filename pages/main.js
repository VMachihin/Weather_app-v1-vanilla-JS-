import {
	inputSearch,
	inputButton,
	tabButtons,
	weatherDetailsContainer,
	weatherDetailsTemplate,
	weatherDetailsCard,
	sliderWeatherTemplateDay,
	sliderWeatherTemplateWeek,
	sliderWeatherCard,
	sliderWeatherCardContainer,
} from '../scripts/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';

import { weatherDataDetails, weatherDataSlider } from '../mock/weatherData.js';

document.addEventListener('DOMContentLoaded', () => {
	for (let i = 0; i < tabButtons.length; i++) {
		tabButtons[i].addEventListener('click', () => {
			//Удаляем активный класс у всех контейнеров слайдера
			// tabContent.forEach((tab) => {
			// 	tab.classList.remove("slider__tab-content_content_show");
			// });
			// Удаляем активный класс у всех кнопок табов слайдера
			tabButtons.forEach((button) => {
				button.classList.remove('tabs__button_active');
			});

			// Добавляем активный класс к текущей кнопке и табу
			tabButtons[i].classList.add('tabs__button_active');

			console.log(tabButtons[i]);
			// tabContent[i].classList.add("slider__tab-content_content_show");
		});
	}

	const createWeatherDetailsCard = (weatherData) => {
		const card = new Card(weatherData, weatherDetailsTemplate, weatherDetailsCard);
		const cardItem = card.createDetailsCard();

		return cardItem;
	};

	const createWeatherSliderCardDay = (weatherData) => {
		const card = new Card(weatherData, sliderWeatherTemplateDay, sliderWeatherCard);
		const cardItem = card.createSliderCard();

		return cardItem;
	};

	const createWeatherSliderCardWeek = (weatherData) => {
		console.log(weatherData);
		const card = new Card(weatherData, sliderWeatherTemplateWeek, sliderWeatherCard);
		const cardItem = card.createSliderCard();

		return cardItem;
	};

	const weatherDetailsCards = new Section(createWeatherDetailsCard, weatherDetailsContainer);
	const weatherSliderCardsDay = new Section(createWeatherSliderCardDay, sliderWeatherCardContainer);
	const weatherSliderCardsWeek = new Section(
		createWeatherSliderCardWeek,
		sliderWeatherCardContainer,
	);
	//
	inputSearch.addEventListener('input', (event) => {
		event.preventDefault();

		console.log(event.target.value); /* первая таска */

		inputButton.setAttribute('type', 'reset');
		inputButton.style =
			'background: url("../../../../assets/icons/icon-reset.svg") center center / cover no-repeat;';

		inputButton.addEventListener('click', () => {
			inputButton.style =
				'background: url("../../../../assets/icons/icon-search.svg") center center / cover no-repeat;';
		});

		if (event.target.value === '') {
			inputButton.style =
				'background: url("../../../../assets/icons/icon-search.svg") center center / cover no-repeat;';
		}
	});

	weatherDetailsCards.renderCards(weatherDataDetails);
	weatherSliderCardsDay.renderCards(weatherDataSlider.oneDay);
	weatherSliderCardsWeek.renderCards(weatherDataSlider.week);
});
