//For each does something for each item in the array without another condition.
//You can pass in two arguments, the item (the actual thing in the array), and the index (the position of the thing in the array)

const logEachItemAndIndex = (array) => {
  //log each entry and the index of that entry
  array.forEach(function (item, index) {
    console.log(item, index)

    return "logging complete"
    //arrow syntax
    //simpleArray.forEach((item,index) =>{
    //console.log(item,index)

  });
}

const sumItemAndIndex = (array) => {
  let result = []
  //log each entry and the index of that entry
  array.forEach(function (item, index) {
    result.push(item + index)
  });
  return result
}
const simpleArray = [1,2,3]
//console.log(logEachItemAndIndex(simpleArray));
console.log(sumItemAndIndex(simpleArray));