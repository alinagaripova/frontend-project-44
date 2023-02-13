// eslint-disable no-console
import gameSkeleton from '../index.js';

export default function progression() {
  const progressionLength = 10;
  const progressionArr = [];
  const step = Math.floor(Math.random() * 10) + 1; // generates a random number between 1 and 10

  for (let i = 0; i < progressionLength; i++) { // eslint-disable-line
    progressionArr.push(i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progressionArr[hiddenIndex]; // save hidden number

  progressionArr[hiddenIndex] = '..'; // change number to ..

  const question = `What number is missing in the progression? \nQuestion: ${progressionArr.join(' ')}`;

  gameSkeleton(question, correctAnswer, progression);
}
