
function average(numbers) {
  const newArray = numbers.filter(function (value) {
    return !Number.isNaN(value);
  })
  return newArray.reduce((p, c) => p + c, 0) / newArray.length;
}

module.exports = { average };
