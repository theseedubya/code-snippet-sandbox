//Filter is going to take the array, check each item in the array against some conditon. 
//If it meets the conditon (returns true), it will be put back in the array.
//If it does not meet the conditon (returns false), it will not be put back in the array
//Essentially, we are  "filtering" out the records in the array that do not meet our condition
//Again, the iteration function is already assigned to a variable so we just need to return that, either in the declaration or after it.
//This would be good for getting the results you want from a large array of objects

const filterExample = (array) => {
    return evens = array.filter(function (item) {
        return item % 2 === 0
    })
    //if we declare evens as a variable rather than return it then we can return here
    return evens
}

const simpleArray = [1, 2, 3, 4]
console.log(filterExample(simpleArray))