"use strict";
class FibonacciClassic {
    calculate(n) {
        if (n <= 1)
            return n;
        return this.calculate(n - 1) + this.calculate(n - 2);
    }
}
class FibonacciOptimized {
    constructor() {
        this.cache = new Map();
    }
    calculate(n) {
        if (this.cache.has(n))
            return this.cache.get(n);
        if (n <= 1)
            return n;
        const result = this.calculate(n - 1) + this.calculate(n - 2);
        this.cache.set(n, result); // Кешируем результат
        return result;
    }
}
// Функция для запуска и сравнения производительности
function measureExecutionTime(fibClass, n) {
    const start = performance.now();
    const result = fibClass.calculate(n);
    const time = performance.now() - start;
    return { result, time };
}
// Объявление глобальной функции для доступа из HTML
window.calculateFibonacci = () => {
    const inputEl = document.getElementById("fibNumber");
    const resultEl = document.getElementById("result");
    const n = parseInt(inputEl.value);
    const classicFib = new FibonacciClassic();
    const optimizedFib = new FibonacciOptimized();
    const { result: classicResult, time: classicTime } = measureExecutionTime(classicFib, n);
    const { result: optimizedResult, time: optimizedTime } = measureExecutionTime(optimizedFib, n);
    resultEl.innerHTML = `
        <p>Классическая программа получения числа Фибонначи: ${classicResult} (Время: ${classicTime.toFixed(2)} мс)</p>
        <p>Оптимиз. программа получения числа Фибонначи: ${optimizedResult} (Время: ${optimizedTime.toFixed(2)} мс)</p>
    `;
};
