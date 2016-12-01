// http://adventofcode.com/2016/day/1

const {
  split,
  map,
  reduce
} = require('lodash/fp');

module.exports = [
  split(/,\s+/),

  map((step) => ({
    direction: step[0] === 'L' ? 1 : -1,
    length: parseInt(step.slice(1), 10)
  })),

  reduce((prev, step) => [
    ...prev,
    {
      direction: (prev[prev.length - 1].direction + step.direction + 4) % 4,
      length: step.length
    }
  ], [{
    direction: 3,
    length: 0
  }]),

  map((step) => ([
      [0, -step.length],
      [-step.length, 0],
      [0, step.length],
      [step.length, 0]
    ])[step.direction]
  ),

  reduce((sum, step) => [
    sum[0] + step[0],
    sum[1] + step[1]
  ], [0, 0]),

  reduce((sum, coordinate) => sum + coordinate, 0)
];
