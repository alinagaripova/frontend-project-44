// eslint-disable no-console
import gameSkeleton from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const findGSD = () => {
  const firstRandomNumber = generateRandomCount(maxCount);
  const secondRandomNumber = generateRandomCount(maxCount);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = NOD(firstRandomNumber, secondRandomNumber);

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
    description: 'Find the greatest common divisor of given numbers.',
  };

  return gameData;
};

export default () => {
  gameSkeleton(findGSD);
};
