// eslint-disable no-console
import gameSkeleton from '../index.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export default function findGSD() {
  const firstRandomNumber = Math.floor(Math.random() * 100);
  const secondRandomNumber = Math.floor(Math.random() * 100);

  const question = `Find the greatest common divisor of given numbers. \nQuestion: ${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = NOD(firstRandomNumber, secondRandomNumber);

  gameSkeleton(question, correctAnswer, findGSD);
}
