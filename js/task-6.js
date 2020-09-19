let input;
let total = 0;
input = prompt("Введите число", "только число");
Number(input);
while (input) {
  if (isNaN(input)) {
    input = prompt("Было введено не число, попробуйте еще раз");
  } else {
    total += Number(input);
    input = prompt("Введите число", "только число");
  }
}
alert(`Общая сумма чисел равна: ${total}`);