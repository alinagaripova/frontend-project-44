// eslint-disable no-console
import gameSkeleton from '../index.js';

export default function calc() {
  const firstRandomNumber = Math.floor(Math.random() * 100);
  const secondRandomNumber = Math.floor(Math.random() * 100);

  const question = `What is the result of the expression? \nQuestion: ${firstRandomNumber} + ${secondRandomNumber}`
  const correctAnswer = firstRandomNumber + secondRandomNumber;

  gameSkeleton(question, correctAnswer, calc)
}
