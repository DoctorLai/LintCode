/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let f = [];
  f[0] = 0;
  f[1] = 1;
  f[2] = 2;
  
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};