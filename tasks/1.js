const {
  split,
  map,
  reduce,
  range,
  uniq
} = require('lodash/fp');

module.exports = {
  a: [
    // Split the steps
    split(/,\s+/),

    // Make the basic step preparation
    map((step) => ({
      direction: {L: 1, R: -1}[step[0]],
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
  ],

  b: [
    // Split the steps
    split(/,\s+/),

    // Make the basic step preparation
    map((step) => ({
      direction: {L: 1, R: -1}[step[0]],
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
    map((step) =>
      range(step.length)(0)
        .map(() => ([
          [0, -1], // Left
          [-1, 0], // Down
          [0, 1], // Right
          [1, 0] // Up
        ])[step.direction])
    ),

    // Flatten all steps into one array
    reduce((list, move) => [...list, ...move], []),

    // Make a list of visited places
    reduce((places, step) => [
      ...places,
      [
        places[places.length - 1][0] + step[0],
        places[places.length - 1][1] + step[1]
      ]
    ], [[0, 0]]),

    // Transform the place into a string in order to make the manipulation simpler
    map((place) => `${place[0]},${place[1]}`),

    // Find the diffs between the list of all places and unique places
    (data) => data.filter((item, index) => item !== uniq(data)[index]),

    // Get the first diff - the first place that apeared somewhere before
    (data) => data[0],

    // Parse the place
    split(','),

    // Sum up the coordinates
    reduce((sum, coordinate) => sum + Math.abs(parseInt(coordinate, 10)), 0)
  ]
};
