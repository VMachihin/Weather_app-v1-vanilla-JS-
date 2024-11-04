export function renderCardsDetails(weatherDataArray) {
	const renderCardsDetails = weatherDataArray.map((item, index) => {
		const rangeStyle =
			item.id === "pressure"
				? `<input type="range" id="pressure" value=${item.value} class="weather-details__meter weather-details__meter_pressure" min="0" max="1000" disabled/>`
				: `<input type="range" id=${item.id} value=${item.value} class="weather-details__meter" min="0" max="100" disabled/>`;

		const infoContent =
			item.id === "humidity"
				? `<div class="weather-details__value-wrapper humidity">
      <span>${item.info.min}</span>
      <span>${item.info.max}</span>
      </div>
      `
				: `<div class="weather-details__value-wrapper">
      <span>${item.info}</span>
      </div>`;

		return `<li class="weather-details__item">
      
      <h2 class="weather-details__title">${item.title}</h2>
      <img
      src=${item.icon}
      alt="icon weather"
      
      />
      <span class="weather-details__value">${item.value}</span>
      <div class="weather-details__more-details">
      ${index < 3 ? rangeStyle : ""}
      ${infoContent}
      </div>
      
      </li>`;
	});

	return renderCardsDetails;
}
