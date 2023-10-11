// lab_5.1
// Гринчук Тарас
// Лабораторна робота № 5.1
// Функції, що містять арифметичний вираз
// Варіант №4

const p = Number(prompt("p = "));
const q = Number(prompt("q = "));

function k(x, y) {
   return (Math.sin(x) / (y * y)) + (Math.cos(y) / (x * x));
}

const result = (Math.pow(k(1 + p, q * q), 2) - k(q * p, 1)) / (1 + k(p * p, q));

alert("Result: " + result);