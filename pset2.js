/*  1.
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all negative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

const removeNegatives = arr => {
    const emptyArray = [];

    for(let i= 0; i < arr.length; i++){
        if(arr[i] < 0){
          emptyArray.push(arr[i] * -1)
    }
         else if(arr[i] > 0){
            emptyArray.push(arr[i])
    }

}
return emptyArray;

}
console.log('Problem 1')
console.log(removeNegatives([-3,-2,1,2,3,-4])) //3,2,1,2,3,4
console.log('_____________')

/*  2.
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
const findVal = (arr, val) => {
    let emptyArray = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }   

    }
    return -1;

}

console.log('Problem 2')
console.log(findVal([1,2,3,4], 1)) //3,2,1,2,3,4
console.log(findVal([1,2,3,4], 4))
console.log(findVal(findVal([1,2,3,4], 9)))
console.log('_____________')

/* 3.
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

const removeOdds = arr => {
    let emptyArray = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 && typeof arr[i] === 'number'){  //javascript '2' makes into number 2;
            emptyArray.push(arr[i])
        }
    }
    return emptyArray;
}


console.log('Problem 3')
console.log(removeOdds([1,2,3,4])) 
console.log(removeOdds([1,"2",3,4]))
console.log('_____________')

/*  4.
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
//Solution
const addSquares = arr => {
    let copyArr = [...arr]
    let emptyArray = [];

    for(let i = 0; i < arr.length; i++){
        emptyArray.push(arr[i] * arr[i])
    }

    return copyArr.concat(emptyArray)

}

console.log('Problem 4')
console.log(addSquares([1,2,3,4])) 

console.log('_____________')

/*  5.
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

//Solution
const doubleify = arr => {
    let copyArr = [...arr]
    let emptyArray = [];

    for(let i = 0; i < arr.length; i++){
        emptyArray.push(arr[i],arr[i])
    }
return emptyArray

}

console.log('Problem 5')
console.log(doubleify([1,2,3,4])) 

console.log('_____________')


/*  6.
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

//Solution:
const findMax = array => {
    let emptyArray = []

    for(let i = 0; i < array.length; i++){
       emptyArray.push((array[i])); 
    }

    return Math.max(...emptyArray);
}

const findMax2 = array => {
    let largest = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i]
        }
    }
    return largest;
}

console.log('Problem 6')
console.log(findMax([1,2,3,99,100,4])) 
console.log(findMax2([1,2,3,99,4])) 

console.log('_____________')

//MDN example
let arrayyy = [1,7,8,9]
console.log(Math.max(...arrayyy))

console.log(Math.max(arrayyy))




