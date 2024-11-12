const checkSnt = (x) => {
  if (x <= 1) {
    return false;
  }

  if (x % 2 === 0 || x % 3 === 0) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(x); i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const filterArray = array.filter(checkSnt);
console.log(filterArray);
