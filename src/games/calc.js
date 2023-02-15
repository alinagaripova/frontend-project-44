// eslint-disable no-console
import gameSkeleton from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;

const chooseExpression = (operation, firstRandomNumber, secondRandomNumber) => {
  switch (operation) {
    case '-':
      return firstRandomNumber - secondRandomNumber;
    case '+':
      return firstRandomNumber + secondRandomNumber;
    case '*':
      return firstRandomNumber * secondRandomNumber;
    default:
      return firstRandomNumber + secondRandomNumber;
  }
};

const calc = () => {
  const operations = ['-', '+'];
  const operation = operations[generateRandomCount(operations.length)];
  const firstRandomNumber = generateRandomCount(maxCount);
  const secondRandomNumber = generateRandomCount(maxCount);

  const question = `${firstRandomNumber} ${operation} ${secondRandomNumber}`;
  const correctAnswer = chooseExpression(operation, firstRandomNumber, secondRandomNumber);

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
    description: 'What is the result of the expression?',
  };

  return gameData;
};

export default () => {
  gameSkeleton(calc);
};
