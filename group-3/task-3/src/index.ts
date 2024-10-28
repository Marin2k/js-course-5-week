function isValid(s: string): boolean {
    const matchingBrackets = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    const stack: string[] = [];

    for (const char of s) {
        if (matchingBrackets.has(char)) {
            if (stack.pop() !== matchingBrackets.get(char)) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

(window as any).checkBrackets = () => {
    const inputEl = document.getElementById("inputData") as HTMLTextAreaElement;
    const resultEl = document.getElementById("result")!;
    resultEl.innerHTML = isValid(inputEl.value) ? "Данная строка - Валидна" : "Данная строка - Невалидна";
};
