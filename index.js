
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  
  return toN + sum (fromN, toN - 1);
  // Sum all the values from fromN up to toN
}

module.exports = sum;