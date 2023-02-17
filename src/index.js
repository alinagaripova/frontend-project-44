// eslint-disable no-console
import readlineSync from 'readline-sync';

const playGame = (gameData, description) => {
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ') || 'UserName';
  console.log(`Hello, ${name}!`);
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

export default playGame;
