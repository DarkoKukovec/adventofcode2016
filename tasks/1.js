// http://adventofcode.com/2016/day/1

const {
  split,
  map,
  reduce
} = require('lodash/fp');

module.exports = [

  // Split the steps
  split(/,\s+/),

  // Make the basic step preparation
  map((step) => ({
    direction: step[0] === 'L' ? 1 : -1,
    length: parseInt(step.slice(1), 10)
  })),

  // Adjust the directions based on the previous direction
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

  // Make a list of moves
  map((step) => ([
      [0, -step.length], // Left
      [-step.length, 0], // Down
      [0, step.length], // Right
      [step.length, 0] // Up
    ])[step.direction]
  ),

  // Sum up the steps
  reduce((sum, step) => [
    sum[0] + step[0],
    sum[1] + step[1]
  ], [0, 0]),

  // Sum up the coordinates
  reduce((sum, coordinate) => sum + coordinate, 0)
];
