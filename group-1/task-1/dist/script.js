"use strict";
// Функция для генерации всех перестановок
function perms(nums) {
    if (nums.length <= 1)
        return [nums];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainingPerms = perms(remainingNums);
        for (const perm of remainingPerms) {
            result.push([currentNum, ...perm]);
        }
    }
    return result;
}
// Функция для обработки ввода и вывода результата
function generatePermutations() {
    const inputElement = document.getElementById("inputNumbers");
    const resultElement = document.getElementById("result");
    const input = inputElement.value;
    const nums = input.split(",").map(num => parseInt(num.trim()));
    const permutations = perms(nums);
    resultElement.innerHTML = JSON.stringify(permutations);
}
// Делаем функцию доступной в глобальной области
window.generatePermutations = generatePermutations;
