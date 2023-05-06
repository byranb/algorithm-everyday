Array.prototype.snail = function (rowsCount, colsCount) {
  let snailArr = []
  if (this.length === 0 || rowsCount * colsCount !== this.length) {
    return snailArr
  }
  for (var i = 0; i < rowsCount; i++) {
    snailArr.push([])
    for (let j = 0; j < colsCount; j++) {
      let index = i + j * rowsCount
      if (j % 2 === 1) {
        index += rowsCount - 1 - i * 2
      }
      snailArr[i] = [...snailArr[i], this[index]]
    }
  }

  return snailArr
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

const arr = [1, 2, 3, 4]
const snailArr = arr.snail(1, 4)
console.log(snailArr)
