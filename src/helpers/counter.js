function makeCounter() {
  let count = 0;

  return function counter() {
    return ++count;
  };
}

const counter = makeCounter();

export default counter;
