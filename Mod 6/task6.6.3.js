const number = +prompt('Введите любое число');
let mass = [];
if (Number.isInteger(number)){
  for (let i = 0; i <= number; i += 1){
    mass[i] = i;
  }
  console.log (mass);
} else {
  alert('Допустим ввод только натуральных чисел');
}