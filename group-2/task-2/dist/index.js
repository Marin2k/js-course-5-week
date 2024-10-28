"use strict";
function processSalesData() {
    var input = document.getElementById("inputData").value.trim();
    var resultElement = document.getElementById("result");
    var salesData = input.split("\n");
    var customers = new Map();
    // Обрабатываем каждую строку данных
    salesData.forEach(function (line) {
        var _a = line.split(" "), customer = _a[0], product = _a[1], quantity = _a[2];
        var qty = parseInt(quantity, 10);
        if (!customers.has(customer)) {
            customers.set(customer, new Map());
        }
        var customerProducts = customers.get(customer);
        customerProducts.set(product, (customerProducts.get(product) || 0) + qty);
    });
    // Формируем и сортируем результат
    var result = [];
    Array.from(customers.keys())
        .sort()
        .forEach(function (customer) {
        result.push("".concat(customer, ":"));
        var products = customers.get(customer);
        Array.from(products.keys())
            .sort()
            .forEach(function (product) {
            result.push("  ".concat(product, " ").concat(products.get(product)));
        });
    });
    resultElement.innerText = result.join("\n");
}
window.processSalesData = processSalesData;
