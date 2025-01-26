export default class Card {
	constructor(weatherData, templateSelector, cardSelector) {
		console.log(templateSelector);
		this._id = weatherData.id;
		this._title = weatherData.title;
		this._icon = weatherData.icon;
		this._value = weatherData.value;
		this._barValue = weatherData.info;
		this._templateSelector = templateSelector;
		this._cardSelector = cardSelector;
		this._time = weatherData.time;
		this._logo = weatherData.logo;
		this._temp = weatherData.temp;
	}

	_getTemplate() {
		const newCard = document
			.querySelector(this._templateSelector)
			.content.querySelector(this._cardSelector)
			.cloneNode(true);

		return newCard;
	}

	createDetailsCard() {
		this._cardElement = this._getTemplate();

		this._cardTitle = this._cardElement.querySelector('.weather-details__title');
		this._cardIcon = this._cardElement.querySelector('.weather-details__image');
		this._cardRange = this._cardElement.querySelector('.weather-details__range');

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

	createSliderCard() {
		this._cardElement = this._getTemplate();

		if (this._cardElement.id === 'tabpanel-day') {
			this._cardTime = this._cardElement.querySelector('.slider__time');
			this._cardLogo = this._cardElement.querySelector('.slider__image');
			this._cardTemp = this._cardElement.querySelector('.slider__temp');

			this._cardTime.textContent = this._time;
			this._cardLogo.src = this._logo;
			this._cardTemp.textContent = this._temp;

			return this._cardElement;
		}

		console.log(this._cardElement.id);
		if (this._cardElement.id === 'tabpanel-week') {
			this._cardTime = this._cardElement.querySelector('.slider__time');
			this._cardLogo = this._cardElement.querySelector('.slider__image');
			this._cardTemp = this._cardElement.querySelector('.slider__temp');

			this._cardTime.textContent = this._time;
			this._cardLogo.src = this._logo;
			this._cardTemp.textContent = this._temp;

			console.log(this._cardElement);

			return this._cardElement;
		}
	}
}
