const fs = require('fs');
const path = require('path');
const runner = require('./runner');

const task = 1;

let data = fs.readFileSync(path.join(__dirname, `./tasks/${task}.input.txt`), 'utf-8');
const steps = require(`./tasks/${task}`);
console.log(runner(steps, data).pop());
