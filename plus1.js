const kiemTraSoNguyenTo = (x) => {
  if (x <= 1) {
    return false;
  };

  if (x % 2 === 0 || x % 3 === 0) {
    return false;
  };

  for (let i = 2; i < Math.sqrt(x); i++) {
    if(x%i ==0){
        return false;
    }
  };
  return true;
};
console.log(kiemTraSoNguyenTo(11));
console.log(kiemTraSoNguyenTo(12));

