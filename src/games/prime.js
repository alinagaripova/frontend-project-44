// eslint-disable no-console
import gameSkeleton from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) { // eslint-disable-line
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const question = generateRandomCount(maxCount);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };

  return gameData;
};

export default () => {
  gameSkeleton(prime);
};
