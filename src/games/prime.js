// eslint-disable no-console
import playGame from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
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

const runPrimeGame = () => {
  const question = generateRandomCount(maxCount);
  const correctAnswer = checkPrime(question) ? 'yes' : 'no';

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
  };

  return gameData;
};

export default () => {
  playGame(runPrimeGame, description);
};
