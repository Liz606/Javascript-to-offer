/**
 * 输入一个整数 n ，求斐波那契数列的第 n 项。
 * 
 * 假定从0开始，第0项为0。(n<=39)
 * 
 * 样例
 * 
 * 输入整数 n=5 
 * 返回 5
 * 
*/

/**
 * @param {number} n
 * @return {number}
 */
var Fibonacci = function (n) {
  let i = 0;
  let j = 1;
  let k = 1;
  if (n === 0) {
    return 0;
  } else {
    while (k < n) {
      console.log(j);
      let temp = j;
      j = i + j;
      i = temp;
      k++;
    }
    return j;
  }
}
console.log(Fibonacci(39));