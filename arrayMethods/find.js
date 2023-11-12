//Find goes through every item in the array and checks it against a conditon and if it is true it returns that item
//This is similar to the "some" method but this actually returns the data that meets this condition rather than a boolean
//It is searching for a specific item
//If it does not find your item it returns undefined this would need to be handled. 
//This is where it could be combined with "some". Only run the find if the same iteration with some returns true

const findExample = (exampleArray) => {
    return found = exampleArray.find(function(item){
        return item === 2
    })
}

const findExampleWithObjects = (exampleArray) => {
    return found = exampleArray.find(function(item){
        return item.id ==="c"
    })
}

const simpleArray = [1,2,3]
console.log(findExample(simpleArray))


const simpleArrayOfObjects = [{id:"a"},{id:"b"},{id:"c"},{id:"d"}]
console.log(findExampleWithObjects(simpleArrayOfObjects))