const {getRandomWordSync, getRandomWord} = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

// sync function logic
function syncFunction() {
    console.log('sync function output!!!!');
    let y;
    for (let i = 1; i <= 100; i++) {
        if (divisibleByThree(i)) {
            y = (divisibleByFive(i)) ? 'FizzBuzz' : 'Fizz';
        } else {
            y = (divisibleByFive(i)) ? 'Buzz' :synRandomWord();
        }
        console.log(i + " : " + y);
    }
}

// error handling for sync function
function synRandomWord(){
    try {
        return getRandomWordSync({withErrors: true});
    } catch (e) {
        return 'It shouldn\'t break anything!';
    }
}

// async function logic
async function asyncFunction() {
    console.log('async function output!!!!');
    let y;
    for (let i = 1; i <= 100; i++) {
        if (divisibleByThree(i)) {
            y = (divisibleByFive(i)) ? 'FizzBuzz' : 'Fizz';
        } else {
            y = (divisibleByFive(i)) ? 'Buzz' : await getRandomWord({withErrors: true}).catch(error => 'It shouldn\'t break anything!');
        }
        console.log(i + " : " + y);
    }
}

// check for divisible by 3
function divisibleByThree(number) {
    return number % 3 === 0;
}

// check for divisible by 5
function divisibleByFive(number) {
    return number % 5 === 0;
}

syncFunction();
asyncFunction();
