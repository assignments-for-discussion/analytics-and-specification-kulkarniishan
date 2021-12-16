
function average(numbers) {
  const newArray = numbers.filter(function (value) {
    return !Number.isNaN(value) && typeof value === 'number';
  })
  return newArray.reduce((p, c) => p + c, 0) / newArray.length;
}

module.exports = { average };
