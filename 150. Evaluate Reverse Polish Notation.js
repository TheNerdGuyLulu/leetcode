/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
  
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b)
  };
  
  for (const n of tokens)
      if (n in operators) {
        let x = stack.pop()
        stack.push(operators[n](stack.pop(), x));
      } else stack.push(parseFloat(n));
    
    return stack;
};
