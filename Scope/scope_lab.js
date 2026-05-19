// Глобальная область видимости
var globalVar = "Я глобальная переменная";
let globalLet = "Я также глобальная, но с областью видимости let";
const globalConst = "Я глобальная константа";

{
  // Блочная область видимости
  var blockVar = "Я переменная внутри блока через var";
  let blockLet = "Я переменная внутри блока через let";
  const blockConst = "Я переменная внутри блока через const";
}
// Проверка глобальной области видимости
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);