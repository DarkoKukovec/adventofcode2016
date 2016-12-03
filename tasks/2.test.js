module.exports = {
  a: {
    input: 'ULL\nRRDDD\nLURDL\nUUUUD',
    steps: [
      ['ULL', 'RRDDD', 'LURDL', 'UUUUD'],

      [
        ['U', 'L', 'L'],
        ['R', 'R', 'D', 'D', 'D'],
        ['L', 'U', 'R', 'D', 'L'],
        ['U', 'U', 'U', 'U', 'D']
      ],

      [5, 1, 9, 8, 5],

      [1, 9, 8, 5],

      '1985'
    ]
  },
  b: {
    input: 'ULL\nRRDDD\nLURDL\nUUUUD',
    steps: [
      ['ULL', 'RRDDD', 'LURDL', 'UUUUD'],

      [
        ['U', 'L', 'L'],
        ['R', 'R', 'D', 'D', 'D'],
        ['L', 'U', 'R', 'D', 'L'],
        ['U', 'U', 'U', 'U', 'D']
      ],

      [5, 5, 'D', 'B', 3],

      [5, 'D', 'B', 3],

      '5DB3'
    ]
  }
}