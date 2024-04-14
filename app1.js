// Basic Arithmetic Questions

// 1. Given length and breadth of a rectangle return the area of a rectangle.

function calculateRectangleArea(length, breadth) {
    return length * breadth;
}

// 2. Take a number and print the square of the number

function squareOfNumber(number) {
    return number * number;
}

// 3. Take two numbers and only print the integer part when a is divided by b

function integerPartOfDivision(a, b) {
    return Math.floor(a / b);
}

// 4. Take a number and print out the last digit of the number

function lastDigit(number) {
    return number % 10;
}

// 5. Take a number and find the cube of that number

function cubeOfNumber(number) {
    return number * number * number;
}

// 6. Take a 3 digit number and print the reverse of that number.
//  Ex - 235 = 532

 function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

// 7. Take a number and print out the first digit of the number.
//     Ex - 145 = 1, 789 = 7;

    function firstDigit(number) {
        return parseInt(number.toString()[0]);
    }

// 8. Take a number and return the sum of the first and last digit.
//     ex - 10 = 1+0 = 1, 452 = 4+2=7

    function sumOfFirstAndLastDigit(number) {
        let first = parseInt(number.toString()[0]);
        let last = number % 10;
        return first + last;
    }
    
// 9. Take the salary of five employees and print the average salary of all the employees.

function averageSalary(salaries) {
    let sum = salaries.reduce((acc, curr) => acc + curr, 0);
    return sum / salaries.length;
}

// 10. Take two numbers and swap them.
//     Ex - a = 10, b=5; => a=5, b=10;

    function swapNumbers(a, b) {
        [a, b] = [b, a];
        return [a, b];
    }
    

    // Basic If-Else Questions - 


// 1. Write a program that checks if a given number is even or odd.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Create a function that takes two numbers as parameters and returns the larger one.

function largerNumber(a, b) {
    return Math.max(a, b);
}

// 3. Write a function that determines if a given year is a leap year.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 4. Implement a program that checks whether a given character is a vowel or consonant.

function checkVowelOrConsonant(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(character.toLowerCase())) {
        return "Vowel";
    } else {
        return "Consonant";
    }
}

// 5. Create a function that takes three numbers as input and returns the largest among them.

function largestAmongThree(a, b, c) {
    return Math.max(a, b, c);
}

// 6. Write a program that checks if a given number is positive, negative, or zero.

function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// 7. Implement a function that calculates the grade of a student based on their score.

function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// 8. Create a program that determines if a given string is a palindrome.

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// 9. Write a function that checks whether a person is eligible to vote based on their age.

function checkVotingEligibility(age) {
    return age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote";
}

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

function triangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}



