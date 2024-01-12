let number = prompt("Nhap vao so co 4 chu so");
               //tang toan
let thounsand = mathFloor((number / 1000));
let hundred = mathFloor((number % 1000) / 100);
let ten = mathFloor((number % 100) / 10);
let unit = number % 10;

console.log("Chu so hang nghin: ", + thounsand);
console.log("Chu so hang tram: ", + hundred);
console.log("Chu so hang chuc: ", + ten);
console.log("Chu so hang don vi: ", + unit);