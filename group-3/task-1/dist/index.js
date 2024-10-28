"use strict";
// Функция удаления дубликатов
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
// Функция для обработки массива
window.processArray = () => {
    const inputEl = document.getElementById("inputArray");
    const resultEl = document.getElementById("result");
    const inputArray = inputEl.value.split(',').map(Number);
    const uniqueArray = removeDuplicates(inputArray);
    resultEl.innerHTML = `Итоговый массив без дубликат чисел: ${uniqueArray.join(', ')}`;
};
