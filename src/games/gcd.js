
import playGame from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;
const description = 'Find the greatest common divisor of given numbers.';

const findNOD = (x, y) => {
  if (y > x) return findNOD(y, x);
  if (!y) return x;
  return findNOD(y, x % y);
};

const findGSD = () => {
  const firstRandomNumber = generateRandomCount(maxCount);
  const secondRandomNumber = generateRandomCount(maxCount);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = findNOD(firstRandomNumber, secondRandomNumber);

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
  };

  return gameData;
};

export default () => {
  playGame(findGSD, description);
};
