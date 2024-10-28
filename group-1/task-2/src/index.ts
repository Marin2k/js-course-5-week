// Функция для вычисления максимальной прибыли
function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}

// Функция для обработки ввода и вывода результата
function calculateMaxProfit(): void {
    const inputElement = document.getElementById("inputPrices") as HTMLInputElement;
    const resultElement = document.getElementById("result")!;

    const input = inputElement.value;
    const prices = input.split(",").map(num => parseInt(num.trim()));
    const profit = maxProfit(prices);

    resultElement.innerHTML = `Максимальная прибыль: ${profit}`;
}

// Делаем функцию доступной в глобальной области
(window as any).calculateMaxProfit = calculateMaxProfit;
