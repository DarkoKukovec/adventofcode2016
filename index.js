const {expect} = require('chai');
const fs = require('fs');
const path = require('path');

const task = 1;

let data = fs.readFileSync(path.join(__dirname, `./tasks/${task}.input.txt`), 'utf-8');
const steps = require(`./tasks/${task}`);
for (let index = 0; index < steps.length; index++) {
  const step = steps[index];
  data = step(data);
}
console.log(data);
