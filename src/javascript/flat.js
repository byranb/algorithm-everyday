var flat = function (arr, n) {
  console.log(n)
  if (n === 0) {
    return arr
  }

  const res = flat(arr, n - 1)
  console.log(res)
  return [].concat(...res)
}

var flat1 = function (arr, n) {
  if (n === 0) {
    return arr
  }

  let ans = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans.push(...flat(arr[i], n - 1))
    } else {
      ans.push(arr[i])
    }
  }

  return ans
}

flat([1, 2, 3, 4, [5, 6, [7, 8]]], 2)
