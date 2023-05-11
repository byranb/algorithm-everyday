//给定两个对象 o1 和 o2 ，请你检查它们是否 完全相等 。
//
// 对于两个 完全相等 的对象，它们必须包含相同的键，并且相关的值也必须 完全相等 。如果两个对象通过了 === 相等性检查，它们也被认为是 完全相等 的。
//
// 你可以假设这两个对象都是 JSON.parse 的输出。换句话说，它们是有效的 JSON 。
//
// 请你在不使用 lodash 的 _.isEqual() 函数的前提下解决这个问题。
//

function areDeeplyEqual(o1: any, o2: any): boolean {
  if (o1 === o2) {
    return true
  }
  if (!o1 || !o2 || typeof o1 !== 'object' || typeof o2 !== 'object') {
    return o1 === o2
  }
  if (o1.__proto__ !== o2.__proto__) {
    return false
  }

  const keys = Object.keys(o1)
  const o2Keys = Object.keys(o2)

  if (keys.length !== o2Keys.length) {
    return false
  }

  for (const key of keys) {
    if (!areDeeplyEqual(o1[key], o2[key])) {
      return false
    }
  }

  return true
}

console.log(areDeeplyEqual({ a: 1, b: 2 }, { a: 1, b: 2 })) // true
console.log(areDeeplyEqual({ a: 1, b: 2 }, { b: 2, a: 1 })) // true
console.log(areDeeplyEqual({ a: 1, b: 2 }, { a: 1, b: 3 })) // false
console.log(areDeeplyEqual({ '0': 1 }, [1])) // false
