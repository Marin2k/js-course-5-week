// Функция для генерации всех перестановок
function perms(nums: number[]): number[][] {
    if (nums.length <= 1) return [nums];
    const result: number[][] = [];

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
function generatePermutations(): void {
    const inputElement = document.getElementById("inputNumbers") as HTMLInputElement;
    const resultElement = document.getElementById("result")!;
    
    const input = inputElement.value;
    const nums = input.split(",").map(num => parseInt(num.trim()));
    const permutations = perms(nums);

    resultElement.innerHTML = JSON.stringify(permutations);
}

// Делаем функцию доступной в глобальной области
(window as any).generatePermutations = generatePermutations;
