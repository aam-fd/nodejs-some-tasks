function sum(a, b) {
  if (isNaN(a) || isNaN(b) || typeof(a) !== 'number' || typeof(b) !== 'number') {
    throw new TypeError();
  }
  return a+b;
}

module.exports = sum;
