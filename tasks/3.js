const {
  split,
  map,
  filter,
  size
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
  b: []
}