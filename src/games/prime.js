// eslint-disable no-console
import gameSkeleton from '../index.js';

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export default function prime() {
  const randomNumber = Math.floor(Math.random() * 100);

  const question = `Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${randomNumber}`
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'

  gameSkeleton(question, correctAnswer, prime)
}
