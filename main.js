const clear = document.getElementById('clear');
const plusAndMinus = document.getElementById('plusAndMinus');
const modulus = document.getElementById('modulus');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const x = document.getElementById('x');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const sub = document.getElementById('sub');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const equals = document.getElementById('equals');

const result = document.getElementById('result');

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const dividing = (a, b) => {
  return a / b;
};

const dic = {
  modulus: '%',
  divide: '÷',
  seven: 7,
  eight: 8,
  nine: 9,
  x: 'x',
  four: 4,
  five: 5,
  six: 6,
  sub: '-',
  one: 1,
  two: 2,
  three: 3,
  plus: '+',
  zero: 0,
  dot: '.',
};

const populateResult = (action) => {
  actionInNum = dic[action.target.id];
  if (result.textContent == 0) {
    result.textContent = actionInNum;
  } else if (actionInNum === '+' && result.textContent.includes('+')) {
    return;
  } else {
    result.textContent += actionInNum;
  }
};

let firstNum = 0;
const operate = (a) => {};

modulus.addEventListener('click', populateResult);
divide.addEventListener('click', populateResult);
seven.addEventListener('click', populateResult);
eight.addEventListener('click', populateResult);
nine.addEventListener('click', populateResult);
x.addEventListener('click', populateResult);
four.addEventListener('click', populateResult);
five.addEventListener('click', populateResult);
six.addEventListener('click', populateResult);
sub.addEventListener('click', populateResult);
one.addEventListener('click', populateResult);
two.addEventListener('click', populateResult);
three.addEventListener('click', populateResult);
plus.addEventListener('click', populateResult);
zero.addEventListener('click', populateResult);
dot.addEventListener('click', populateResult);
equals.addEventListener('click', populateResult);
