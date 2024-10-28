"use strict";
function isValid(s) {
    const matchingBrackets = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    const stack = [];
    for (const char of s) {
        if (matchingBrackets.has(char)) {
            if (stack.pop() !== matchingBrackets.get(char))
                return false;
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
window.checkBrackets = () => {
    const inputEl = document.getElementById("inputData");
    const resultEl = document.getElementById("result");
    resultEl.innerHTML = isValid(inputEl.value) ? "Данная строка - Валидна" : "Данная строка - Невалидна";
};
