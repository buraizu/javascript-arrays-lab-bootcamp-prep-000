// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten() {
  kittens.push('Ralph');
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten() {
  kittens2 = [...kittens, 'Broom'];
  return kittens2;
}



