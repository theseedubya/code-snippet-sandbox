//"findIndex" is very similar to "find" but it instead returns the index of the data rather than the data itself
//If it cannot find anything that meets the condition, it returns -1

const findIndexExample = (exampleArray) => {
    return found = exampleArray.findIndex(function(item){
        return item === 2
    })
}

const findIndexExampleWithObjects = (exampleArray) => {
    return found = exampleArray.findIndex(function(item){
        return item.id ==="c"
    })
}

const simpleArray = [1,2,3]
console.log(findIndexExample(simpleArray))


const simpleArrayOfObjects = [{id:"a"},{id:"b"},{id:"c"},{id:"d"}]
console.log(findIndexExampleWithObjects(simpleArrayOfObjects))