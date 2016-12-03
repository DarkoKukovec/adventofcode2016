const {expect} = require('chai');
const fs = require('fs');
const path = require('path');
const runner = require('./runner');

const tasks = [1, 2, 3];

for (const task of tasks) {
  describe(`Day ${task}`, function() {
    const steps = require(`./tasks/${task}`);
    const res = require(`./tasks/${task}.test`);

    describe('Task A', function() {
      const results = runner(steps.a, res.a.input);

      for (let index = 0; index < steps.a.length; index++) {
        it(`Step ${index + 1} should be correct`, function() {
            expect(JSON.stringify(results[index])).to.equal(JSON.stringify(res.a.steps[index]));
        });
      }
    });

    describe('Task B', function() {
      const results = runner(steps.b, res.b.input);

      for (let index = 0; index < steps.b.length; index++) {
        it(`Step ${index + 1} should be correct`, function() {
            expect(JSON.stringify(results[index])).to.equal(JSON.stringify(res.b.steps[index]));
        });
      }
    });
  });
}