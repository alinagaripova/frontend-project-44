import playGame from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const description = 'What number is missing in the progression?';

const makeProgression = (firstCount, progressionLength, step) => {
  const progressionArr = [];

  for (let i = firstCount; i < progressionLength; i++) { // eslint-disable-line
    progressionArr.push(i * step);
  }

  return progressionArr;
};

const runProgressionGame = () => {
  const progressionLength = 10;
  const minCount = 1;
  const step = generateRandomCount(progressionLength, minCount);
  const progressionArr = makeProgression(0, progressionLength, step);
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progressionArr[hiddenIndex]; // save hidden number

  progressionArr[hiddenIndex] = '..'; // change number to ..

  const question = `${progressionArr.join(' ')}`;

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
  };

  return gameData;
};

export default () => {
  playGame(runProgressionGame, description);
};
