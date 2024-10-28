// Функция для вычисления максимального объема воды
function maxArea(heights: number[]): number {
    let left = 0;
    let right = heights.length - 1;
    let maxVolume = 0;

    while (left < right) {
        const height = Math.min(heights[left], heights[right]);
        const width = right - left;
        const volume = height * width;

        maxVolume = Math.max(maxVolume, volume);

        // Двигаем указатели
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVolume;
}

// Функция для обработки ввода и вывода результата
function calculateMaxWater(): void {
    const inputElement = document.getElementById("inputHeights") as HTMLInputElement;
    const resultElement = document.getElementById("result")!;

    const input = inputElement.value;
    const heights = input.split(",").map(num => parseInt(num.trim()));
    const maxWaterVolume = maxArea(heights);

    resultElement.innerHTML = `Максимальный объем воды: ${maxWaterVolume}`;
}

// Делаем функцию доступной в глобальной области
(window as any).calculateMaxWater = calculateMaxWater;
