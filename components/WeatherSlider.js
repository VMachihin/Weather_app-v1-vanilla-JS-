export class WeatherSlider {
  selectors = {
    root: '.slider__list',
    template: '.slide-template',
    sliderItem: '.slider__tab',
  };

  constructor() {
    this._template = document.querySelector(this.selectors.template);
  }

  _getTemplate() {
    const newCardDetails = this._template.content
      .querySelector(this.selectors.sliderItem)
      .cloneNode(true);

    return newCardDetails;
  }

  createSliderCard(weatherData) {
    this._cardElement = this._getTemplate(); /* получаем шаблон */

    /* находим в нём все необходимые нам селекторы */
    this.cardTime = this._cardElement.querySelector('.slider__time');
    this.cardImage = this._cardElement.querySelector('.slider__image');
    this.cardTemp = this._cardElement.querySelector('.slider__temp');
    /*  */

    /* Заполняем данными  */
    this.cardTime.textContent = weatherData.time;
    this.cardImage.src = weatherData.logo;
    this.cardTemp.textContent = weatherData.temp;

    return this._cardElement;
  }
}

export const weatherSlider = new WeatherSlider();
