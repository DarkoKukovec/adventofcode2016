const {
  split,
  map,
  flow,
  countBy,
  invertBy,
  filter,
  sumBy,
  find
} = require('lodash/fp');

module.exports = {
  a: [

    // Split room records
    split(/\n/),

    // Parse room records
    map((item) => /(\D+)(\d+)\[([a-z]+)\]/.exec(item).slice(1)),

    // Structure room records
    map((item) => ({
      name: item[0]
        .split('')
        .filter((c) => c !== '-'),
      id: parseInt(item[1], 10),
      checksum: item[2]
    })),

    // Count the name letters
    map((item) => ({
      count: flow([
        countBy((c) => c),
        invertBy((c) => c)
      ])(item.name),
      id: item.id,
      checksum: item.checksum
    })),

    // Sort the letters by ocurrence
    map((item) => ({
      keys: Object.keys(item.count).sort().reverse(),
      count: item.count,
      id: item.id,
      checksum: item.checksum
    })),

    // Calculate the complete hash
    map((item) => ({
      hash: item.keys.map((key) => [...item.count[key]].sort().join('')).join(''),
      id: item.id,
      checksum: item.checksum
    })),

    // Filter the valid rooms
    filter((item) => item.hash.slice(0, 5) === item.checksum),

    // Sum the room ids
    sumBy((item) => item.id)
  ],
  b: [

    // Split room records
    split(/\n/),

    // Parse room records
    map((item) => /(\D+)(\d+)\[([a-z]+)\]/.exec(item).slice(1)),

    // Structure room records
    map((item) => ({
      raw: item[0],
      name: item[0]
        .split('')
        .filter((c) => c !== '-'),
      id: parseInt(item[1], 10),
      checksum: item[2]
    })),

    // Count the name letters
    map((item) => ({
      raw: item.raw,
      count: flow([
        countBy((c) => c),
        invertBy((c) => c)
      ])(item.name),
      id: item.id,
      checksum: item.checksum
    })),

    // Sort the letters by ocurrence
    map((item) => ({
      raw: item.raw,
      keys: Object.keys(item.count).sort().reverse(),
      count: item.count,
      id: item.id,
      checksum: item.checksum
    })),

    // Calculate the complete hash
    map((item) => ({
      raw: item.raw,
      hash: item.keys.map((key) => [...item.count[key]].sort().join('')).join(''),
      id: item.id,
      checksum: item.checksum
    })),

    // Filter the valid rooms
    filter((item) => item.hash.slice(0, 5) === item.checksum),

    // Split the name into words
    map((item) => ({
      name: item.raw.slice(0, -1).split('-'),
      id: item.id
    })),

    // Rotate the letters
    map((item) => ({
      name: item.name.map((word) => word
        .split('')
        .map((c) => String.fromCharCode((c.charCodeAt(0) - 97 + item.id) % 26 + 97))
        .join('')
      ).join(' '),
      id: item.id
    })),

    find((item) => item.name === 'northpole object storage'),

    (item) => item && item.id
  ]
};
