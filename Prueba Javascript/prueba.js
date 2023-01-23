const getPairs = (array) => {
  if (Array.isArray(array)) {
    // Verifico que la variable array sea un Array para tener acceso al método .filter()
    return array.filter((a) => a % 2 == 0);
  }
};

const getPrime = (array) => {
  if (Array.isArray(array)) {
    // Verifico que la variable array sea un Array para tener acceso al método .filter()
    return array.filter((a) => checkIsPrime(a));
  }
};

function checkIsPrime(numero) {
  if (numero > 1) {
    for (i = 2; i < numero; i++) {
      if (numero % i == 0) {
        return false;
      }
    }
    return true;
  } else return false;
}

console.log(getPairs([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getPairs([100, 22, 30, 40, 57, 67, 71, 80, 90]));
console.log(getPrime([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getPrime([100, 22, 30, 40, 57, 67, 71, 80, 90]));
