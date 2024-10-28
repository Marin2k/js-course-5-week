// Функция удаления дубликатов
function removeDuplicates(arr: number[]): number[] {
    return Array.from(new Set(arr));
}

// Функция для обработки массива
(window as any).processArray = () => {
    const inputEl = document.getElementById("inputArray") as HTMLInputElement;
    const resultEl = document.getElementById("result")!;
    const inputArray = inputEl.value.split(',').map(Number); 
    const uniqueArray = removeDuplicates(inputArray); 
    resultEl.innerHTML = `Итоговый массив без дубликат чисел: ${uniqueArray.join(', ')}`;
};
