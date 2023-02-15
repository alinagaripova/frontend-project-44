// eslint-disable no-console
import gameSkeleton from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;

const checkEven = () => {
  const question = generateRandomCount(maxCount);
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
  };

  return gameData;
};

export default () => {
  gameSkeleton(checkEven);
};
