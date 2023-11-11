//In Map, it takes the item from the array, does something to it and then puts it back in the array in the same position
//This is similar to forEach but you assign the map to a variable at the start. This eliminates the need to add a step to push the result to a new array as you did with forEach
//The iteration function is already assigned to a variable so we just need to return that, either in the declaration or after it.

const mapExample = (array) => {
    return double = array.map(function (item) {
       return item * 2
    })
//return [double]
}

const simpleArray = [1, 2, 3]
console.log(mapExample(simpleArray))