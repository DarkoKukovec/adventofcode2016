module.exports = {
  a: {
    input: 'aaaaa-bbb-z-y-x-123[abxyz]\na-b-c-d-e-f-g-h-987[abcde]\nnot-a-real-room-404[oarel]\ntotally-real-room-200[decoy]',
    steps: [
      [
        'aaaaa-bbb-z-y-x-123[abxyz]',
        'a-b-c-d-e-f-g-h-987[abcde]',
        'not-a-real-room-404[oarel]',
        'totally-real-room-200[decoy]'
      ],

      [
        ['aaaaa-bbb-z-y-x-', '123', 'abxyz'],
        ['a-b-c-d-e-f-g-h-', '987', 'abcde'],
        ['not-a-real-room-', '404', 'oarel'],
        ['totally-real-room-', '200', 'decoy']
      ],

      [{
        name: ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'z', 'y', 'x'],
        id: 123,
        checksum: 'abxyz'
      }, {
        name: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        id: 987,
        checksum: 'abcde'
      }, {
        name: ['n', 'o', 't', 'a', 'r', 'e', 'a', 'l', 'r', 'o', 'o', 'm'],
        id: 404,
        checksum: 'oarel'
      }, {
        name: ['t', 'o', 't', 'a', 'l', 'l', 'y', 'r', 'e', 'a', 'l', 'r', 'o', 'o', 'm'],
        id: 200,
        checksum: 'decoy'
      }],

      [{
        count: {1: ['z', 'y', 'x'], 3: ['b'], 5: ['a']},
        id: 123,
        checksum: 'abxyz'
      }, {
        count: {1: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']},
        id: 987,
        checksum: 'abcde'
      }, {
        count: {1: ['n', 't', 'e', 'l', 'm'], 2: ['a', 'r'], 3: ['o']},
        id: 404,
        checksum: 'oarel'
      }, {
        count: {1: ['y', 'e', 'm'], 2: ['t', 'a', 'r'], 3: ['o', 'l']},
        id: 200,
        checksum: 'decoy'
      }],

      [{
        keys: ['5', '3', '1'],
        count: {1: ['z', 'y', 'x'], 3: ['b'], 5: ['a']},
        id: 123,
        checksum: 'abxyz'
      }, {
        keys: ['1'],
        count: {1: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']},
        id: 987,
        checksum: 'abcde'
      }, {
        keys: ['3', '2', '1'],
        count: {1: ['n', 't', 'e', 'l', 'm'], 2: ['a', 'r'], 3: ['o']},
        id: 404,
        checksum: 'oarel'
      }, {
        keys: ['3', '2', '1'],
        count: {1: ['y', 'e', 'm'], 2: ['t', 'a', 'r'], 3: ['o', 'l']},
        id: 200,
        checksum: 'decoy'
      }],

      [{
        hash: 'abxyz',
        id: 123,
        checksum: 'abxyz'
      }, {
        hash: 'abcdefgh',
        id: 987,
        checksum: 'abcde'
      }, {
        hash: 'oarelmnt',
        id: 404,
        checksum: 'oarel'
      }, {
        hash: 'loartemy',
        id: 200,
        checksum: 'decoy'
      }],

      [{
        hash: 'abxyz',
        id: 123,
        checksum: 'abxyz'
      }, {
        hash: 'abcdefgh',
        id: 987,
        checksum: 'abcde'
      }, {
        hash: 'oarelmnt',
        id: 404,
        checksum: 'oarel'
      }],

      1514
    ]
  },
  b: {
    input: 'qzmt-zixmtkozy-ivhz-343[zimth]',
    steps: [
      ['qzmt-zixmtkozy-ivhz-343[zimth]'],

      [['qzmt-zixmtkozy-ivhz-', '343', 'zimth']],

      [{
        raw: 'qzmt-zixmtkozy-ivhz-',
        name: ['q', 'z', 'm', 't', 'z', 'i', 'x', 'm', 't', 'k', 'o', 'z', 'y', 'i', 'v', 'h', 'z'],
        id: 343,
        checksum: 'zimth'
      }],

      [{
        raw: 'qzmt-zixmtkozy-ivhz-',
        count: {
          1: ['q', 'x', 'k', 'o', 'y', 'v', 'h'],
          2: ['m', 't', 'i'],
          4: ['z']
        },
        id: 343,
        checksum: 'zimth'
      }],

      [{
        raw: 'qzmt-zixmtkozy-ivhz-',
        keys: ['4', '2', '1'],
        count: {
          1: ['q', 'x', 'k', 'o', 'y', 'v', 'h'],
          2: ['m', 't', 'i'],
          4: ['z']
        },
        id: 343,
        checksum: 'zimth'
      }],

      [{
        raw: 'qzmt-zixmtkozy-ivhz-',
        hash: 'zimthkoqvxy',
        id: 343,
        checksum: 'zimth'
      }],

      [{
        raw: 'qzmt-zixmtkozy-ivhz-',
        hash: 'zimthkoqvxy',
        id: 343,
        checksum: 'zimth'
      }],

      [{
        name: ['qzmt', 'zixmtkozy', 'ivhz'],
        id: 343
      }],

      [{
        name: 'very encrypted name',
        id: 343
      }],

    ]
  }
}