// eslint-disable no-console
import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const gameSkeleton = (gameData) => {
  const rounds = 3;
  const { description } = gameData();
  const name = greeting();

  console.log(description);

  for (let i = 1; i <= rounds; i += 1) {
    const { question, correctAnswer } = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameSkeleton;
