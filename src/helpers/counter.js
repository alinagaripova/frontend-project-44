function makeCounter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

let counter = makeCounter();

export default counter;