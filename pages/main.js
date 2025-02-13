import {
  inputSearch,
  inputButton,
  tabButtons,
  weatherDetailsRoot,
  weatherSliderRootDay,
  weatherSliderRootWeek,
  tabContents,
} from '../scripts/constants.js';
import Section from '../components/Section.js';

import { weatherDataDetails, weatherDataSlider } from '../mock/weatherData.js';
import { weatherDetails } from '../components/WeatherDetails.js';
import { weatherSlider } from '../components/WeatherSlider.js';

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок табов слайдера
      tabButtons.forEach((button) => {
        button.classList.remove('tabs__button_active');
      });
      // Добавляем активный класс к текущей кнопке и табу
      tabButtons[i].classList.add('tabs__button_active');

      tabContents.forEach((tab) => {
        tab.classList.remove('visually-hidden');

        if (tabButtons[i].getAttribute('id') !== tab.getAttribute('id')) {
          tab.classList.add('visually-hidden');
        }
      });
    });
  }

  /* Рисуем карточки weather-details */
  const createWeatherDetailsCard = (weatherData) => {
    const cardItem = weatherDetails.createDetailsCard(weatherData);
    return cardItem;
  };
  const weatherDetailsCards = new Section(
    createWeatherDetailsCard,
    weatherDetailsRoot
  );
  weatherDetailsCards.renderCards(weatherDataDetails);
  /*  */

  /* Рисуем карточки слайдера на день */
  const createWeatherSliderCardDay = (weatherData) => {
    const cardItem = weatherSlider.createSliderCard(weatherData);
    return cardItem;
  };
  const weatherSliderCardsDay = new Section(
    createWeatherSliderCardDay,
    weatherSliderRootDay
  );
  weatherSliderCardsDay.renderCards(weatherDataSlider.oneDay);
  /*  */

  /* Рисуем карточки слайдера на неделю */
  const createWeatherSliderCardWeek = (weatherData) => {
    const cardItem = weatherSlider.createSliderCard(weatherData);
    return cardItem;
  };
  const weatherSliderCardsWeek = new Section(
    createWeatherSliderCardWeek,
    weatherSliderRootWeek
  );
  weatherSliderCardsWeek.renderCards(weatherDataSlider.week);

  inputSearch.addEventListener('input', (event) => {
    event.preventDefault();
    console.log(event.target.value); /* первая таска */
    inputButton.setAttribute('type', 'reset');
    inputButton.style =
      'background: url("./assets/icons/icon-reset.svg") 50% / cover no-repeat;';
    inputButton.addEventListener('click', () => {
      inputButton.style =
        'background: url("./assets/icons/icon-search.svg") 50% / cover no-repeat;';
    });
    if (event.target.value === '') {
      inputButton.style =
        'background: url("./assets/icons/icon-search.svg") 50% / cover no-repeat;';
    }
  });
});
