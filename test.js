const {expect} = require('chai');
const fs = require('fs');
const path = require('path');
const {chain} = require('lodash');

const results = {
  1: null
};

const tasks = Object.keys(results);

for (const task of tasks) {
  describe(`tasks/${task}`, function() {
    it('should return a correct result', function() {
      const data = fs.readFileSync(path.join(__dirname, `./tasks/${task}.txt`), 'utf-8');
      const solution = require(`./tasks/${task}`);
      expect(solution(data)).to.equal(results[task]);
    });
  });
}