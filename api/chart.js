const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);

const shortMonth = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const monthVisitData = shortMonth.map(m => {
  return {
    'month': m,
    'Отлично': Math.floor(Math.random() * 1000) + 200,
    'Хорошо': Math.floor(Math.random() * 1000) + 250,
    'Нейтрально': Math.floor(Math.random() * 1000) + 300,
    'Не плохо': Math.floor(Math.random() * 1000) + 350,
    'Ужасно': Math.floor(Math.random() * 1000) + 400,
  };
});

const plainData = [10, 50, 35, 25, 10]
const locationData = [
  {
    value: 10,
    name: 'Отлично: ' + plainData[0]
  },
  {
    value: 50,
    name: 'Хорошо: ' + plainData[1]
  },
  {
    value: 35,
    name: 'Нейтрально: ' + plainData[2]
  },
  {
    value: 25,
    name: 'Не плохо: ' + plainData[3]
  },
  {
    value: 10,
    name: 'Ужасно: ' + plainData[4]
  }
];

const campaignData = [
  {
    value: 335,
    name: 'Website'
  },
  {
    value: 310,
    name: 'Email'
  },
  {
    value: 234,
    name: 'Ads'
  },
  {
    value: 135,
    name: 'Video'
  },
  {
    value: 1548,
    name: 'Search'
  }
];

const StackMainData = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
const StackData = StackMainData.map((item, key) => {
  return {
    'label': key + 'D',
    'max': 500,
    'sales': item,
  };
});   
const SinData = range(1, 12).map(i => {
  return {
    'cate': 'Cat' + i,
    'value': ((Math.sin(i / 5) * (i / 5 - 0.1) + i / 6) * 5)
  };
});


export {
  monthVisitData,
  campaignData,
  locationData,
  StackData,
  SinData,
};