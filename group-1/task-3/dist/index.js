"use strict";
// Функция для вычисления максимального объема воды
function maxArea(heights) {
    var left = 0;
    var right = heights.length - 1;
    var maxVolume = 0;
    while (left < right) {
        var height = Math.min(heights[left], heights[right]);
        var width = right - left;
        var volume = height * width;
        maxVolume = Math.max(maxVolume, volume);
        // Двигаем указатели
        if (heights[left] < heights[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxVolume;
}
// Функция для обработки ввода и вывода результата
function calculateMaxWater() {
    var inputElement = document.getElementById("inputHeights");
    var resultElement = document.getElementById("result");
    var input = inputElement.value;
    var heights = input.split(",").map(function (num) { return parseInt(num.trim()); });
    var maxWaterVolume = maxArea(heights);
    resultElement.innerHTML = "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0432\u043E\u0434\u044B: ".concat(maxWaterVolume);
}
// Делаем функцию доступной в глобальной области
window.calculateMaxWater = calculateMaxWater;
