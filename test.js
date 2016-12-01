const {expect} = require('chai');
const fs = require('fs');
const path = require('path');

const tasks = [
  1
];

for (const task of tasks) {
  describe(`tasks/${task}`, function() {
    it('should return a correct result', function() {
      const steps = require(`./tasks/${task}`);
      const res = require(`./tasks/${task}.test`);
      let data = res.input;
      for (let index = 0; index < steps.length; index++) {
        const step = steps[index];
        data = step(data);
        expect(JSON.stringify(data)).to.equal(JSON.stringify(res.steps[index]));
      }
    });
  });
}