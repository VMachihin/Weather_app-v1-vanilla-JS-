export function renderCardInfoWeek(weatherData) {
	const renderCardInfoWeek = weatherData.map((item) => {
		return `
               <li class="slider__tab-info slider__tab-info_week">
                  <span class="slider__date">${item.weekDate}</span>
                  <img
                    src=${item.logo}
                    alt="логотип погоды"
                    width="32"
                    height="32"
                  />
                  <span class="slider__temp">${item.degrees}</span>
                </li>
      
             `;
	});

	return renderCardInfoWeek;
}
