const readlinePromises = require('node:readline/promises');
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = Math.floor(Math.random() * 100) + 1;
console.log(number);

rl.on('line', (line) => {
  if (+line === number) {
    console.log(`Отгадано число ${line}`);
    rl.close();
  } else {
    if (+line < number) {
      console.log(`Больше`);
    } else {
      console.log(`Меньше`);
    }
  }
});