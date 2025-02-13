export class WeatherDetails {
  selectors = {
    template: '.weather-details-template',
    cardDetails: '.weather-details__item',
  };

  constructor() {
    this.template = document.querySelector(this.selectors.template);
    this.root = document.querySelector(this.selectors.root);
  }

  _getTemplate() {
    const newCardDetails = this.template.content
      .querySelector(this.selectors.cardDetails)
      .cloneNode(true);

    return newCardDetails;
  }

  createDetailsCard(weatherData) {
    this._cardElement = this._getTemplate(); /* получаем шаблон */

    /* находим в нём все необходимые нам селекторы */
    this._cardTitle = this._cardElement.querySelector(
      '.weather-details__title'
    );
    this._cardIcon = this._cardElement.querySelector('.weather-details__image');
    this._cardRange = this._cardElement.querySelector(
      '.weather-details__range'
    );

    this._cardBarValues = this._cardElement.querySelector(
      '.weather-details__bar-values'
    );
    this._cardValue = this._cardElement.querySelector(
      '.weather-details__value'
    );
    this._range = this._cardElement.querySelector('.weather-details__range');
    this._rangeEllipse = this._cardElement.querySelector(
      '.weather-details__range-ellipse'
    );
    this._cardBarValue = this._cardElement.querySelector(
      '.weather-details__bar-value'
    );
    this._cardBarMinValue = this._cardElement.querySelector(
      '.weather-details__bar-minValue'
    );
    this._cardBarMaxValue = this._cardElement.querySelector(
      '.weather-details__bar-maxValue'
    );
    /*  */

    /* Заполняем данными */
    if (weatherData.id === 'humidity') {
      this._cardBarValues.style.justifyContent = 'space-between';
      this._cardBarValue.classList.add('visually-hidden');
      this._cardBarMinValue.textContent = weatherData.info.min;
      this._cardBarMaxValue.textContent = weatherData.info.max;
      this._range.style.setProperty(
        '--ellipse-position',
        `${weatherData.value}%`
      );
      this._rangeEllipse.style.setProperty(
        '--ellipse-position',
        `${weatherData.value}%`
      );
    } else {
      this._cardBarValues.style.justifyContent = 'center';
      this._cardBarMinValue.classList.add('visually-hidden');
      this._cardBarMaxValue.classList.add('visually-hidden');
      this._cardBarValue.textContent = weatherData.info;
      this._range.style.setProperty(
        '--ellipse-position',
        `${weatherData.value}%`
      );
      this._rangeEllipse.style.setProperty(
        '--ellipse-position',
        `${weatherData.value}%`
      );
    }

    if (weatherData.id === 'pressure') {
      this._cardRange.classList.add('weather-details__range_pressure');
      this._rangeEllipse.style.setProperty(
        '--ellipse-position',
        `${Math.floor(weatherData.value / 10)}%`
      );
      this._range.style.setProperty(
        '--ellipse-position',
        `${Math.floor(weatherData.value / 10)}%`
      );
    }

    if (
      weatherData.id === 'sunrise' ||
      weatherData.id === 'sunset' ||
      weatherData.id === 'windStrength'
    ) {
      this._cardRange.classList.add('visually-hidden');
    }

    this._cardTitle.textContent = weatherData.title;
    this._cardIcon.src = weatherData.icon;
    this._cardValue.textContent = weatherData.value;

    return this._cardElement;
  }
}

export const weatherDetails = new WeatherDetails();
