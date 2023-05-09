// 检查是否是类的对象实例

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === undefined || obj === null) return false
  while (obj !== null) {
    if (obj.constructor === classFunction) return true
    obj = Object.getPrototypeOf(obj)
  }
  return false
}

console.log(checkIfInstanceOf(new Date(), Date)) // true

console.log(checkIfInstanceOf(new Date(), Math)) // true
