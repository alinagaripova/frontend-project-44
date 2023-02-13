// eslint-disable no-console
import readlineSync from 'readline-sync';
import { name } from './cli.js';
import counter from './helpers/counter.js';
// import makeRandomCounter from './helpers/randomCounter.js';

export default function gameSkeleton(question, correctAnswer, gameFunction) {
  console.log(question);

  const answer = readlineSync.question('Your answer: ');

  if (answer == correctAnswer) {
    let gameCount = counter();

    if (gameCount < 3) {
      console.log('Correct!');
      gameFunction();
    } else {
      console.log(`Congratulations, ${name}`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
}
