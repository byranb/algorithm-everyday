//请你编写一段可应用于所有数组的代码，使任何数组调用 array. groupBy(fn) 方法时，它返回对该数组 分组后 的结果。
//
// 数组 分组 是一个对象，其中的每个键都是 fn(arr[i]) 的输出的一个数组，该数组中含有原数组中具有该键的所有项。
//
// 提供的回调函数 fn 将接受数组中的项并返回一个字符串类型的键。
//
// 每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。
//

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  let groupByResult = {}
  for (var i = 0; i < this.length; i++) {
    let groupKey = groupByResult[fn(this[i])]
    if (groupKey) {
      groupByResult[fn(this[i])].push(this[i])
    } else {
      groupByResult[fn(this[i])] = [this[i]]
    }
  }
  return groupByResult
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1, 2, 3].groupBy(String))
console.log([1, 2, 3].groupBy((x) => (x % 2 === 0 ? 'even' : 'odd')))
