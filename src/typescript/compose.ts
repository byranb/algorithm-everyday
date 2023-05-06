type F = (x: number) => number

function compose(functions: F[]): F {
  return function (x: number): number {
    return functions.reduceRight((accum, curr) => {
      return curr(accum)
    }, x)
  }
}

const result = compose([(x) => x + 1, (x) => x + 2, (x) => x + 3])(4) // 10

console.log(result)

console.log(compose([(x) => x + 1, (x) => x + 2, (x) => x + 3])(4)) // 10
