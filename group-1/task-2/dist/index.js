"use strict";
// Функция для вычисления максимальной прибыли
function maxProfit(prices) {
    var minPrice = Infinity;
    var maxProfit = 0;
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var price = prices_1[_i];
        if (price < minPrice) {
            minPrice = price;
        }
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}
// Функция для обработки ввода и вывода результата
function calculateMaxProfit() {
    var inputElement = document.getElementById("inputPrices");
    var resultElement = document.getElementById("result");
    var input = inputElement.value;
    var prices = input.split(",").map(function (num) { return parseInt(num.trim()); });
    var profit = maxProfit(prices);
    resultElement.innerHTML = "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C: ".concat(profit);
}
// Делаем функцию доступной в глобальной области
window.calculateMaxProfit = calculateMaxProfit;
