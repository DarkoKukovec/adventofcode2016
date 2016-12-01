module.exports = (steps, input) => {
  let data = input;
  const results = [];
  for (const step of steps) {
    data = step(data);
    results.push(data);
  }
  return results;
};