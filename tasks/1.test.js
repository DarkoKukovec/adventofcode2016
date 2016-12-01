module.exports = {
  input: 'R5, L5, R5, R3',
  steps: [
    ['R5', 'L5', 'R5', 'R3'],

    [{
      direction: -1,
      length: 5
    }, {
      direction: 1,
      length: 5
    }, {
      direction: -1,
      length: 5
    }, {
      direction: -1,
      length: 3
    }],

    [{
      direction: 3,
      length: 0
    }, {
      direction: 2,
      length: 5
    }, {
      direction: 3,
      length: 5
    }, {
      direction: 2,
      length: 5
    }, {
      direction: 1,
      length: 3
    }],

    [
      [0, 0],
      [0, 5],
      [5, 0],
      [0, 5],
      [-3, 0]
    ],

    [2, 10],

    12
  ]
};