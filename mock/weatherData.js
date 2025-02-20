export const weatherDataDetails = [
  {
    id: 'humidity',
    title: 'Влажность',
    icon: './assets/icons/icon-humidity.svg',
    value: '75 %',
    info: {
      min: '0 %',
      max: '100 %',
    },
  },
  {
    id: 'pressure',
    title: 'Давление',
    icon: './assets/icons/icon-barometr.svg',
    value: '761',
    info: 'Повышенное',
  },
  {
    id: 'visibility',
    title: 'Видимость',
    icon: './assets/icons/icon-visibility.svg',
    value: '28 км',
    info: 'Нормальная',
  },
  {
    id: 'sunrise',
    title: 'Рассвет',
    icon: './assets/icons/icon-sunrise.svg',
    value: '8:42',
    info: 'Прошло: 02:47',
  },
  {
    id: 'sunset',
    title: 'Закат',
    icon: './assets/icons/icon-sunset.svg',
    value: '16:37',
    info: 'Осталось: 05:08',
  },
  {
    id: 'windStrength',
    title: 'Сила ветра',
    icon: './assets/icons/icon-direction.svg',
    value: '2 м/с',
    info: 'Северо-западный',
  },
];

export const weatherDataSlider = {
  oneDay: [
    {
      time: '06:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-10°',
    },
    {
      time: '09:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-8°',
    },
    {
      time: '12:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-7°',
    },
    {
      time: '15:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-5°',
    },
    {
      time: '18:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-7°',
    },
    {
      time: '21:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-9°',
    },
    {
      time: '00:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-11°',
    },
    {
      time: '03:00',
      logo: './assets/icons/icon-clouds.svg',
      temp: '-15°',
    },
  ],
  week: [
    {
      time: 'Вс, 07 янв.',
      logo: './assets/icons/icon-clouds.svg',
      temp: 'от -17° до -11°',
    },
    {
      time: 'Пн, 08 янв.',
      logo: './assets/icons/icon-few-clouds.svg',
      temp: 'от -16° до -8°',
    },
    {
      time: 'Вт, 09 янв.',
      logo: './assets/icons/icon-few-clouds.svg',
      temp: 'от -8° до -2°',
    },
    {
      time: 'Ср, 10 янв.',
      logo: './assets/icons/icon-few-clouds.svg',
      temp: 'от -10° до -3°',
    },
    {
      time: 'Чт, 11 янв.',
      logo: './assets/icons/icon-few-clouds.svg',
      temp: 'от -9° до -1°',
    },
  ],
};
