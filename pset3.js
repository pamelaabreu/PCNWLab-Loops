/*  1.
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [2]
               getMiddle([1,2,3,4]); // [2,3]
*/

const getMiddle = arr => { 
    let middleItem = Math.floor(arr.length / 2);

    if(arr.length % 2 === 0){
         return arr.slice(middleItem - 1, middleItem + 1)}
    
    return arr.slice(middleItem, middleItem + 1);

    }


console.log('Problem 1')
console.log(getMiddle([1,2,3]))
console.log(getMiddle([1,2,3,4])) 
console.log(getMiddle([1,2,3,4,5,6])) 
console.log('_____________')


/*  2.
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/
const addToMiddle = (arr,anything) => {
    const middleIndex = Math.ceil(arr.length / 2);
    const firstHalfofArray = arr.slice(0,middleIndex);
    const secondHalfofArray = arr.slice(middleIndex);
    

    let newFirstHalf = firstHalfofArray.push(anything);
    let newArr = firstHalfofArray.concat(secondHalfofArray);
    return newArr;

//newArr;
}

console.log('Problem 2')
console.log(addToMiddle([1,2,3], 0)) //[1,2,0,3]
console.log(addToMiddle([1,2,3,4], 0))  //[1,2,0,3,4]
console.log('_____________')

// const middleIndex = Math.ceil(arr1.length / 2);
// const firstHalf = arr1.slice(0, middleIndex);
// const secondHalf = arr1.slice(middleIndex);

// let firstHalfArray = firstHalf.concat(arr2);
// let secondHalfArray = firstHalfArray.concat(secondHalf);

// return secondHalfArray;

/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/

/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/

/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/

/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/

/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/

/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/


