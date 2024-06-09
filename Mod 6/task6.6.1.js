let word = prompt('Введите слово для проверки');
wordLowerCase = word.toLowerCase();
let polindrom = '';
for (let i = wordLowerCase.length -1; i >=0; i -= 1){
  polindrom += wordLowerCase[i];
}

//console.log(polindrom);
if (polindrom === wordLowerCase){
  alert(`Слово ${word} является палиндромом`);
} else {
  alert(`Слово ${word} не является палиндромом`);
}
