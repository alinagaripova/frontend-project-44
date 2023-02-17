// eslint-disable no-console
import playGame from '../index.js';
import generateRandomCount from '../utils/randomCount.js';

const maxCount = 100;
const description = 'What is the result of the expression?';

const chooseExpression = (operation, firstRandomNumber, secondRandomNumber) => {
  switch (operation) {
    case '-':
      return firstRandomNumber - secondRandomNumber;
    case '+':
      return firstRandomNumber + secondRandomNumber;
    case '*':
      return firstRandomNumber * secondRandomNumber;
    default:
      throw new Error(`Unknown operation ${operation}!`);
  }
};

const runCalcGame = () => {
  const operations = ['-', '+'];
  const operation = operations[generateRandomCount(operations.length)];
  const firstRandomNumber = generateRandomCount(maxCount);
  const secondRandomNumber = generateRandomCount(maxCount);

  const question = `${firstRandomNumber} ${operation} ${secondRandomNumber}`;
  const correctAnswer = chooseExpression(operation, firstRandomNumber, secondRandomNumber);

  const gameData = {
    question,
    correctAnswer: String(correctAnswer),
  };

  return gameData;
};

export default () => {
  playGame(runCalcGame, description);
};
