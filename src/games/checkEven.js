// eslint-disable no-console
import gameSkeleton from '../index.js';

export default function checkEven() {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = `Answer "yes" if the number is even, otherwise answer "no". \nQuestion: ${randomNumber}`;

  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  gameSkeleton(question, correctAnswer, checkEven);
}
