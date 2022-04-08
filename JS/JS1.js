// Answer for the bracket's
var isValid = function (s) {
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let ans = [];
    for (let char of s) {
        if (brackets[char]) {
            ans.push(brackets[char])
        } else {
            if (ans.pop() !== char) return false
        }
    }
    return (!ans.length)
};


