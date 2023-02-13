function makeCounter() {
  let count = 0;

  return function counter() {
    return ++count; // eslint-disable-line
  };
}

const counter = makeCounter();

export default counter;
