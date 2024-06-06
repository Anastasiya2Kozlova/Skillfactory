// Задание 5.10.4
// Перепишите задание 5.10.3.
// Определите остаток от деления количества лет на 10. В зависимости от этого выведите в алерт «Антон: 21 год» или «Антон: 24 года», 
// или «Антон: 25 лет» и т.д. То есть для всех чисел с остатком 1 должно быть «_год», для чисел с остатком 2, 3, 4 – «_года», а для всех остальных – «_лет».
// Вы можете использовать для этого условные конструкции if-else или switch-case.

let Name = prompt('Введите ваше имя:');

const thisYear = 2024;
if ( (Name != "") && (Name != null)){
  let yearOfBirth = prompt('Введите год вашего рождения:');
  if ( (typeof +yearOfBirth === "number") && ( yearOfBirth != null) && ( yearOfBirth != "") && (+yearOfBirth <= thisYear)) { 
    let age = thisYear - +yearOfBirth;
    let remainder = age % 10;
    switch(remainder){
        
      case 1:
        alert(`${Name} : ${age} год`);
        break;
        
      case 2:
      case 3:
      case 4:
        alert(`${Name} : ${age} годa`);
        break;
        
      default:
        alert(`${Name} : ${age} лет`);
        break;

    }
    
    
  } else {
    alert("Год должен быть числом!");
  }
} else { alert("Введите имя!"); }