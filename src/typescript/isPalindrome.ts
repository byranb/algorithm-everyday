// function isPalindrome(x: number): boolean {
//     let over = '';
//     const xStr: string = (x).toString();
//     for(let i = xStr.length; i > 0; i--) {
//         over += xStr[i - 1];
//     }
//     return parseInt(over) === x;
// }

function isPalindrome(x: number): boolean {
  // let a = Number(String(x).split("").reverse().join(""));
  // if (a == x) {
  //     return true
  // }
  // return false;
  const a = String(x).split('')
  for (let i = 0; i < a.length; i++) {
    if (a[i] != a[a.length - i - 1]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome(-121)) // false
