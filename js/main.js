// task 1:
const max1 = 30;
let str1 = '';

for (let i = 20; i <= max1; i += 0.5) {
    str1 += `${i}`;
    if (i !== max1) {
        str1 += ' ';
    }
};

console.log(`Числа від 20 до 30 з кроком 0,5: ${str1}`);

//=================================================================================================
//task 2:
const currency = 27;
const max2 = 100;
let exchange = '';

for (let i = 10; i <= max2; i += 10) {
    exchange += `${i}$ = ${i * currency} гривень`;
    if (i !== max2) {
        exchange += ', ';
    }
};

console.log(`Обмін валют: ${exchange}`);

//=================================================================================================
//task 3:
const number = 9;
const max3 = 100;
let squares = '';

if (number <= 0) {
    console.log('Ви ввели число менше, або рівне 0');
} else {
    for (let i = 1; i <= max3; i++) {
        if (i * i <= number) {
            squares += `${i}, `;
        }
    }  

    const str2 = squares.slice(0, -2);
    console.log(`Цілі числа від 1 до 100, квадрат яких не перевищує числа ${number}: ${str2}`)

}

//=================================================================================================
//task 4:
const number2 = 7;
let prime = true;

if (number2 == 1 || number2 <= 0) {
    console.log(`${number2} - не просте та не складове число.`);
} else {
    for (let i = 2; i < number2; i++) {
        if (number2 % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(`${number2} просте число`);
    } else {
        console.log(`${number2} складове число`);
    }
}

//=================================================================================================
//task 5:
const number3 = 9;
let num = number3;
let degree = 0;
let message;

if (number3 <= 0) {
    message = 'Ви ввели число менше, або рівне 0';
} else {
    while (num % 3 == 0) {
        degree++;
        num /= 3;
    }   
    if (num == 1) {
        message = `Mожна одержати число ${number3} шляхом зведення числа 3 у ${degree} ступінь`;
    } else {
        message = `Шляхом зведення числа 3 у деякий ступінь не можна одержати число ${number3}`;
    }
}

console.log(message);