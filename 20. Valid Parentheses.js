/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    if (s.length == 1 || s.length == 0) return false;
    
    for (const n of s) {
        switch (n) {
            case '(':
            case '[':
            case '{':
                stack.push(n);
                break;
            case ')':
                if (stack.pop() !== '(') return false; break;
            case ']':
                if (stack.pop() !== '[') return false; break;
            case '}':
                if (stack.pop() !== '{') return false;        }}
    
    if (stack.length !== 0) return false;
    return true;
};
