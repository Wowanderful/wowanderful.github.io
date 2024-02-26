const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const MESSAGES = [
  'Everything is great!',
  'Mostly good. But not all.',
  'When youre taking a photo, it would be nice if you could get your thumb away',
  'Overall, this is unprofessional.',
  'My granma sniezed with the camera in her hands and even she got a better picture.',
  'I slipped on a banana peel and dropped the camera on a cat and even I had a better picture.',
  'Faces at the picture are distorted, like they are being beated. How could you catch such an unlucky moment?'
];

const NAMES = [
  'Michael Carleone',
  'Antonio Tropicanto',
  'Bob Roston',
  'Long Woody',
  'panterka',
  'Lana',
  'Quentin Tarantino',
  'Bullet',
  'fastandfurious',
  'Bob1979',
  'AI',
  'PinkyPie',
  'Applejack',
  'twylight_sparkle'
]

const DESCRIPTION = [
  'Here will be the pool party',
  'As you say, bro',
  'Blue Lagoon',
  'What a nice...camera!',
  'Happy together',
  'Here comes Batman',
  'Just add some cream',
  'Something very healthy',
  'Please dont attack us! We have no oil',
  'All the shoes are brown...And the sky is grey',
  'The perfect beach',
  'Kiss my shiny metal ass',
  'My healthy diet',
  'Hallo Kitty',
  'A glass of wine is missing here',
  'Heavy traffic here',
  'Metallica',
  '70s forever',
  'You will never lose your way again',
  'Abu-Dubabi',
  'Some foodporn',
  'What a hell is there in the water?!',
  'No worries, Im just passing by',
  'Magic signs',
  'Sir, could you please step out of the car!',
]

const randomNumber = (elements) => elements[getRandomInteger(0, elements.length - 1)]

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  }
}

const generateCommentId = createIdGenerator();

const createUserPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTION[index - 1],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length:getRandomInteger(1, 3)}, createComments),
});

const createComments = () => ({
  id: getRandomInteger(0, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: randomNumber(MESSAGES),
  names: randomNumber(NAMES)
})

const drawPictures = () => Array.from({length: 25}, (_, pictureIndex) => createUserPhoto(pictureIndex +1));


export {drawPictures, getRandomInteger};
