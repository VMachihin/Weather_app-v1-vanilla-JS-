import { weatherDataDetails } from '../mock/weatherData.js';

export class WeatherDetails {
  selectors = {
    template: '.weather-details-template',
    cardDetails: '.weather-details__item',
  };

  constructor(weatherData) {
    this._id = weatherData.id;
    this._title = weatherData.title;
    this._icon = weatherData.icon;
    this._value = weatherData.value;
    this._barValue = weatherData.info;
    this._time = weatherData.time;
    this._logo = weatherData.logo;
    this._temp = weatherData.temp;

    this.template = document.querySelector(this.selectors.template);
    this.root = document.querySelector(this.selectors.root);
  }

  _getTemplate() {
    const newCardDetails = this.template.content
      .querySelector(this.selectors.cardDetails)
      .cloneNode(true);

    return newCardDetails;
  }

  createDetailsCard() {
    this._cardElement = this._getTemplate();

    this._cardTitle = this._cardElement.querySelector('.weather-details__title');
    this._cardIcon = this._cardElement.querySelector('.weather-details__image');
    this._cardRange = this._cardElement.querySelector('.weather-details__range');

    console.log(this._cardElement);

    this._cardBarValues = this._cardElement.querySelector('.weather-details__bar-values');
    this._cardValue = this._cardElement.querySelector('.weather-details__value');
    this._cardBarValue = this._cardElement.querySelector('.weather-details__bar-value');
    this._cardBarMinValue = this._cardElement.querySelector('.weather-details__bar-minValue');
    this._cardBarMaxValue = this._cardElement.querySelector('.weather-details__bar-maxValue');

    if (this._id === 'humidity') {
      this._cardBarValues.style.justifyContent = 'space-between';
      this._cardBarValue.classList.add('isHidden');
      this._cardBarMinValue.textContent = this._barValue.min;
      this._cardBarMaxValue.textContent = this._barValue.max;
    } else {
      this._cardBarValues.style.justifyContent = 'center';
      this._cardBarMinValue.classList.add('isHidden');
      this._cardBarMaxValue.classList.add('isHidden');
      this._cardBarValue.textContent = this._barValue;
    }

    if (this._id === 'pressure') {
      this._cardRange.classList.add('weather-details__range_pressure');
    }

    if (this._id === 'sunrise' || this._id === 'sunset' || this._id === 'windStrength') {
      this._cardRange.classList.add('isHidden');
    }

    this._cardTitle.textContent = this._title;
    this._cardIcon.src = this._icon;
    this._cardValue.textContent = this._value;

    return this._cardElement;
  }
}

export const weatherCardDetails = new WeatherDetails(weatherDataDetails);
