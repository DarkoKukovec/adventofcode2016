const {expect} = require('chai');
const fs = require('fs');
const path = require('path');
const {chain} = require('lodash');

const task = 1;

const data = fs.readFileSync(path.join(__dirname, `./tasks/${task}.txt`), 'utf-8');
const solution = require(`./tasks/${task}`);
console.log(solution(data));