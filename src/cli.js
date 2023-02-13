// eslint-disable no-console
import readlineSync from 'readline-sync';

export let name; // eslint-disable-line

export function askName() {
  const printedName = readlineSync.question('May I have your name? ') || 'UserName';
  console.log(`Hello, ${printedName}!`);
  name = printedName;
}
