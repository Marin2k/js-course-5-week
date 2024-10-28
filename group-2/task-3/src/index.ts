class FibonacciClassic {
    calculate(n: number): number {
        if (n <= 1) return n;
        return this.calculate(n - 1) + this.calculate(n - 2);
    }
}

class FibonacciOptimized {
    private cache: Map<number, number>;

    constructor() {
        this.cache = new Map();
    }

    calculate(n: number): number {
        if (this.cache.has(n)) return this.cache.get(n)!;
        if (n <= 1) return n;

        const result = this.calculate(n - 1) + this.calculate(n - 2);
        this.cache.set(n, result); // Кешируем результат
        return result;
    }
}

// Функция для запуска и сравнения производительности
function measureExecutionTime(fibClass: FibonacciClassic | FibonacciOptimized, n: number): { result: number, time: number } {
    const start = performance.now();
    const result = fibClass.calculate(n);
    const time = performance.now() - start;
    return { result, time };
}

// Объявление глобальной функции для доступа из HTML
(window as any).calculateFibonacci = () => {
    const inputEl = document.getElementById("fibNumber") as HTMLInputElement;
    const resultEl = document.getElementById("result")!;
    const n = parseInt(inputEl.value);
    
    const classicFib = new FibonacciClassic();
    const optimizedFib = new FibonacciOptimized();

    const { result: classicResult, time: classicTime } = measureExecutionTime(classicFib, n);
    const { result: optimizedResult, time: optimizedTime } = measureExecutionTime(optimizedFib, n);

    resultEl.innerHTML = `
        <p>Classic Fibonacci: ${classicResult} (Time: ${classicTime.toFixed(2)} ms)</p>
        <p>Optimized Fibonacci: ${optimizedResult} (Time: ${optimizedTime.toFixed(2)} ms)</p>
    `;
};
