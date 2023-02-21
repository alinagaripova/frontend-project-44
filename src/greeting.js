
import readlineSync from 'readline-sync';

const printGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ') || 'UserName';
  console.log(`Hello, ${name}!`);
  return name;
};

export default printGreeting;
