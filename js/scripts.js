let number = prompt('Введите число от 10000 до 99999', 0);
number = number + '';
if(number === number.split('').reverse().join('')){
    alert('палиндром');
} else {
    alert('Не палиндром');
}