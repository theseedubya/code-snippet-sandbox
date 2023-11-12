//"every" is similar to "some" in that it is essentially the inverse. Every entry in the array must meet the condition.
//We pass in each item of the array and check it against the condition. 
//The function stops iterating once it reaches the end of the array or the iteration returns false

const everyExample = (array) => {
    return arrayContainsOnlyPositiveNumbers = array.every(function (item) {
        return item > 0;
    })
}
const simpleArray = [1, 2, 3]
console.log(everyExample(simpleArray))
