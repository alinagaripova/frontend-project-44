// eslint-disable no-console
import gameSkeleton from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const makeProgression = (progressionLength, step) => {
  const progressionArr = [];

  for (let i = 0; i < progressionLength; i++) { // eslint-disable-line
    progressionArr.push(i * step);
  }

  return progressionArr;
};

const progression = () => {
  const progressionLength = 10;
  const step = generateRandomCount(progressionLength) + 1; // generate random number between 1-10
  const progressionArr = makeProgression(progressionLength, step);
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progressionArr[hiddenIndex]; // save hidden number

  progressionArr[hiddenIndex] = '..'; // change number to ..

  const question = `${progressionArr.join(' ')}`;

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
    description: 'What number is missing in the progression?',
  };

  return gameData;
};

export default () => {
  gameSkeleton(progression);
};
