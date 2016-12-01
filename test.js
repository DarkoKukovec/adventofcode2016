const {expect} = require('chai');
const fs = require('fs');
const path = require('path');
const runner = require('./runner');

const tasks = [
  1
];

for (const task of tasks) {
  describe(`Day ${task}`, function() {
    const steps = require(`./tasks/${task}`);
    const res = require(`./tasks/${task}.test`);
    const results = runner(steps, res.input);

    for (let index = 0; index < steps.length; index++) {
      it(`Step ${index + 1} should be correct`, function() {
          expect(JSON.stringify(results[index])).to.equal(JSON.stringify(res.steps[index]));
      });
    }
  });
}