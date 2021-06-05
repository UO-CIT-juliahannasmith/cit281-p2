/*
    CIT 281 Project 2
    Name: Julia Smith
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

/*for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}
*/

//console.log(result);

//This function gets one letter from the variable alphabet
const getRandomLetter = function(){
    return alphabet[getRandomInteger(1,alphabet.length-1)];
}

//console.log(getRandomLetter());

//This function will return a string of reandom length with random letters
const getRandomString = function(minLength, maxLength){
    let result2 = "";
    for(let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++){
        result2 += getRandomLetter();
    }
    return result2;
}

console.log(getRandomString(10,20));

//This function will return a string in ascending order
const getSortedString = function(string){ return string.split("").sort().join(""); }

console.log(getSortedString(getRandomString(10,20)));