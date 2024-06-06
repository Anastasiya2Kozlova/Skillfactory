// Задание 5.10.3
// С помощью метода prompt() получите от пользователя его имя, а затем год рождения.
// Сохраните эти данные в переменные.
// Затем вычислите возраст пользователя и выведите с помощью alert() сообщение вида: «Владимир: 25».
// Используйте для решения шаблонные строки.

let Name = prompt('Введите ваше имя:');
const thisYear = 2024;
if ( (Name != "") && (Name != null)){
  let yearOfBirth = prompt('Введите год вашего рождения:');
  if ( (typeof +yearOfBirth === "number") && (+yearOfBirth != NaN) && (yearOfBirth != null) && (+yearOfBirth <= thisYear)) { 
    alert(`${Name} : ${thisYear - yearOfBirth}`);
  } else {
    alert("Год должен быть числом!");
  }
} else { alert("Введите имя!"); }