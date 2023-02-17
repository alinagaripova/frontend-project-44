// eslint-disable no-console
import playGame from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = () => {
  const question = generateRandomCount(maxCount);
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
  };

  return gameData;
};

export default () => {
  playGame(checkEven, description);
};
