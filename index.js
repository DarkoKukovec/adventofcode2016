const fs = require('fs');
const path = require('path');
const runner = require('./runner');

const task = 1;

let dataA = fs.readFileSync(path.join(__dirname, `./tasks/${task}A.input.txt`), 'utf-8');
let dataB = fs.readFileSync(path.join(__dirname, `./tasks/${task}B.input.txt`), 'utf-8');
const steps = require(`./tasks/${task}`);
console.log(runner(steps.a, dataA).pop());
console.log(runner(steps.b, dataB).pop());
