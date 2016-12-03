const {
  split,
  map,
  filter,
  size,
  chunk,
  flatten
} = require('lodash/fp');

module.exports = {
  a: [

    // Parse the triangles
    split(/\n/),

    // Parse the triangle sides
    map((item) => item
      .trim()
      .split(/\s+/g)
      .map((side) => parseInt(side.trim(), 10))
      .sort((a, b) => a - b)
    ),

    // Remove the invalid triangles
    filter((triangle) => triangle[0] + triangle[1] > triangle[2]),

    // Check the valid triangle list size
    size
  ],
  b: [

    // Parse the triangles
    split(/\n/),

    // Parse the triangle groups
    chunk(3),

    // Map triangles into tables
    map((list) => list.map((group) => group
      .trim()
      .split(/\s+/g)
      .map((side) => parseInt(side.trim(), 10))
    )),

    // Rotate the tables
    map((list) => [
      [list[0][0], list[1][0], list[2][0]],
      [list[0][1], list[1][1], list[2][1]],
      [list[0][2], list[1][2], list[2][2]]
    ]),

    // Ungroup the triangles
    flatten,

    // Sort the sides
    map((list) => [...list].sort((a, b) => a - b)),

    // Remove the invalid triangles
    filter((triangle) => triangle[0] + triangle[1] > triangle[2]),

    // Check the valid triangle list size
    size
  ]
}