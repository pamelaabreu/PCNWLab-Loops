/*  1.
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
//Solution:
const average = (arr) => {
    const copyArr = [...arr]
    let sum = 0;             

    for(let i = 0; i <= copyArr.length; i++){                   //let i = 0, starts at the index of array
        sum += copyArr[i]; 
        // add numbers, diviide by length
    }
    return sum / copyArr.length;
}

console.log('Problem 1')
console.log(average([1,2,3,4]))
console.log('_____________')


/*  2.
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
//Solution:
const squareEach = (arr) => {
    let result = []

    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * arr[i])
    }

return result;

}
console.log('Problem 2')
console.log(squareEach([1,2,3,4])) //[1,4,9,16]
console.log('_____________')

//Solution 2, Making a deep copy:
const squareEach2 = (arr) => {
    const copyArr = arr.slice(0)
    for(let i = 0; i < copyArr.length; i++){
        copyArr[i] = copyArr[i] ** 2;
    }
    return copyArr;
}
console.log('Problem 2')
console.log(squareEach2([1,2,3,4])) //[1,4,9,16]
console.log('_____________')


/*  3.
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
//Solution:
const averageSquare = (arr) => {
    let sum = 0
    let copyArr = arr.slice(0)

    for(let i = 0; i < arr.length; i++){
        copyArr[i] **= 2
        sum += arr[i]; 

    } 

    return sum / arr.length;

}
console.log('Problem 3')
console.log(averageSquare([1,2,3,4])) //[1,4,9,16] > 7.5
console.log('_____________')

//Solution 2:
const averageSquare2 = (arr) => {
    return average(squareEach2(arr));
}

console.log('Problem 3')
console.log(averageSquare2([1,2,3,4])) //[1,4,9,16] > 7.5
console.log('_____________')


/*  4.
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
// Solution:
const negateArr = (arr) => {
    const copyArr = [...arr];
    for(let i = 0; i < copyArr.length; i++){
        // copyArr[i] *= -1;
        copyArr[i] = copyArr[i] * -1;
    }

    return copyArr;
}

console.log('Problem 4')
console.log(negateArr([1,2,3,4])) //[1,4,9,16] > 7.5
console.log('_____________')

 /*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
//Solution:
const reverseArr = arr => {
    const copyArr = []
    for(let i = 0; i < arr.length; i++){
        copyArr[arr.length - 1 - i] = arr[i];
    }

    return copyArr;
}
console.log('Problem 5')
console.log(reverseArr([1,2,3,4]))
console.log('_____________')

//Solution: starting at the end of the array
const reverseArr2 = arr => {
    const copyArr = []
    for(let i = arr.length; i >= 0; i--){
        copyArr.push(arr[i]);
    }

    return copyArr;
}

console.log('Problem 5')
console.log(reverseArr([1,2,3,4]))
console.log('_____________')

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards = arr => {
    let emptyArr = [];

    for(let i = arr.length -1; i >= 0; i--){
        emptyArr.push((arr[i] * -1));

    }
    return emptyArr;

}
console.log('Problem 6')
console.log(reverseArr([1,2,3,4]))
console.log('_____________')

const negateBackwards2 = arr => {
    negateArr(reverseArr(arr));
}
console.log('Problem 6')
console.log(reverseArr([1,2,3,4]))
console.log('_____________')


