
const somarFunc = require("./modulos/somar");
const subtrairFunc = require("./modulos/subtrair");
const multiplicarFunc = require("./modulos/multiplicar");
const dividirFunc = require("./modulos/dividir");

console.log('Operações - Calculadora')
console.log('3 + 5 = '+somarFunc(3,5));
console.log('3 - 5 = '+subtrairFunc(3,5));
console.log('3 . 5 = '+multiplicarFunc(3,5));
console.log('3 / 5 = '+dividirFunc(3,5));