export function renderCardInfoOneDay(weatherData) {
	const renderCardInfoOneDay = weatherData.map((item) => {
		return `
                <li class="slider__tab-info">
                  <span class="slider__time">${item.time}</span>
                  <img
                    src=${item.logo}
                    alt="логотип погоды"
                    width="32"
                    height="32"
                  />
                  <span class="slider__temp">${item.temp}</span>
                </li>
      
      `;
	});

	return renderCardInfoOneDay;
}
