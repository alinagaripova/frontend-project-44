// eslint-disable no-console
import readlineSync from 'readline-sync';
import { name } from './cli.js';

export default function checkEven(winCount = 0) {
  const randomNumber = Math.floor(Math.random() * 100);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);

  const answer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no'

  if (answer.toLowerCase() === correctAnswer) {
    ++winCount;
    if (winCount < 3) {
      console.log('Correct!');
      checkEven(winCount);
    } else {
      console.log(`Congratulations, ${name}`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${(isEven && 'yes') || (!isEven && 'no')}'.`);
    console.log(`Let's try again, ${name}`);
  }
}
