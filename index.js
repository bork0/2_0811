// task #1

let squareSide = parseFloat(prompt('Enter square side').split(' ').join(''));

while (squareSide <= 0 || isNaN(squareSide)) {
    alert('Error, square side must be a positive number');
    squareSide = parseFloat(prompt('Enter square side'));
}

let squareArea = squareSide ** 2;
alert('Square area is ' + squareArea + '\u33A0');

// task #2

let givenNumber = parseInt(prompt('Enter two-digits number').split(' ').join(''));

while (givenNumber < -99 || (givenNumber > -10 && givenNumber < 0) || (givenNumber >= 0 && givenNumber < 10) || givenNumber > 99 || isNaN(givenNumber)) {
    alert('Error, enter TWO-DIGITS number');
    givenNumber = parseInt(prompt('Enter two-digits number').split(' ').join(''));
    while (givenNumber < 0) {
        givenNumber *= -1;
    }
}


let firstDigit = parseInt(givenNumber / 10);
console.log(firstDigit + ` is a first digit of a given number`);

let secondDigit = givenNumber % 10;
console.log(secondDigit + ` is a second digit of a given number`);

// task #3

let a = parseInt(prompt(`Enter integer number`).split(` `).join(``));
let b = parseInt(prompt(`Enter one more integer number`).split(` `).join(``));

while (!(a > 2 && b <= 3)) {
    alert(`First number should be bigger than 2 and second one less or equal to 3`)
    a = parseInt(prompt(`Enter integer number`).split(` `).join(``));
    b = parseInt(prompt(`Enter one more integer number`).split(` `).join(``));
}

if (a > 2 && b <= 3) {
    alert(`Congrats, 'a' is bigger than 2 and 'b' is less or equal to 3`)
};

// task #4 

let alpha = parseInt(prompt(`Enter first integer number`).split(` `).join(``));
let beta = parseInt(prompt(`Enter second integer number`).split(` `).join(``));
let gamma = parseInt(prompt(`Enter third integer number`).split(` `).join(``));

while (!(alpha < beta && beta < gamma)) {
    alert(`First number must be the smallest one and third one - the biggest.
           Click 'OK' or press 'Enter' to enter numbers again.`);
    alpha = parseInt(prompt(`Enter integer number`).split(` `).join(``));
    beta = parseInt(prompt(`Enter one more integer number`).split(` `).join(``));
    gamma = parseInt(prompt(`Enter the last integer number`).split(` `).join(``));
}

if (alpha < beta && beta < gamma) {
    alert(`Congrats, you entered correct numbers`);
};

// task #5 

let positiveIntegerNumber = parseInt(prompt(`Enter a 3-digits odd positive integer number`).split(` `).join(``));

while (!(positiveIntegerNumber % 2 != 0 && (positiveIntegerNumber > 99 && positiveIntegerNumber < 1000))) {
    positiveIntegerNumber = parseInt(prompt(`Error, please enter a 3-digits odd positive integer number to continue`).split(` `).join(``));
}

if (positiveIntegerNumber % 2 != 0 && (positiveIntegerNumber > 99 && positiveIntegerNumber < 1000)) {
    alert(`Congrats, you entered a 3-digits odd positive integer number`);
};

// task #6 is similar to the one in the previous homework

// task #7

let arrayToFill = [];
arrayToFill[0] = 315;
arrayToFill[1] = 'Cucumber';
arrayToFill[2] = true;
arrayToFill[3] = null;
alert(arrayToFill.length + ` elements in array`);

let userElementAddToArray = prompt(`Now you can enter whatever you want`);
arrayToFill.push(userElementAddToArray);
alert(arrayToFill[4]);

// task #8

let aNumber = parseInt(prompt('Enter a number').split(' ').join(''));

// a^4 in two operations
let bNumber = aNumber * aNumber; //first operation
let cNumber = bNumber * bNumber; //second operation
console.log(cNumber + ` is your number raised to the 4-th power`);

// a^6 in three operations
// let bNumber = aNumber * aNumber; //first operation
// let cNumber = bNumber * bNumber; //second operation
let exponent6 = cNumber * bNumber; //third operation
console.log(exponent6 + ` is your number raised to the 6-th power`);

// a^15 in five operations
// let bNumber = aNumber * aNumber; //first operation
// let cNumber = bNumber * bNumber; //second operation
let dNumber = cNumber * aNumber; //third operation
let eNumber = dNumber * dNumber; //fourth operation
let exponent15 = eNumber * dNumber; //fifth operation
console.log(exponent15 + ` is your number raised to the 15-th power`);


// task #9

let manipulateNumber = parseInt(prompt(`Please enter integer number`).split(' ').join(''));
if (manipulateNumber > 2 && manipulateNumber <= 5) {
    console.log(manipulateNumber + 10);
} else if (manipulateNumber > 7 && manipulateNumber < 40) {
    console.log(manipulateNumber - 100);
} else if (manipulateNumber <= 0 || manipulateNumber > 3000) {
    console.log(manipulateNumber * 3);
} else {
    console.log(manipulateNumber * 0);
}