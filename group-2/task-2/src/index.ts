function processSalesData(): void {
    const input = (document.getElementById("inputData") as HTMLTextAreaElement).value.trim();
    const resultElement = document.getElementById("result")!;
    const salesData = input.split("\n");

    const customers: Map<string, Map<string, number>> = new Map();

    // Обрабатываем каждую строку данных
    salesData.forEach(line => {
        const [customer, product, quantity] = line.split(" ");
        const qty = parseInt(quantity, 10);

        if (!customers.has(customer)) {
            customers.set(customer, new Map());
        }

        const customerProducts = customers.get(customer)!;
        customerProducts.set(product, (customerProducts.get(product) || 0) + qty);
    });

    // Формируем и сортируем результат
    const result: string[] = [];
    Array.from(customers.keys())
        .sort()
        .forEach(customer => {
            result.push(`${customer}:`);
            const products = customers.get(customer)!;
            Array.from(products.keys())
                .sort()
                .forEach(product => {
                    result.push(`  ${product} ${products.get(product)}`);
                });
        });

    resultElement.innerText = result.join("\n");
}

(window as any).processSalesData = processSalesData;
