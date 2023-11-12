//We are going to take an array and we are going to do something and then pass the result to the next iteration along with the next item in the array. That is why we put result i.
//The first time this iterates, it is going to get that result and that result will be put into the next iteration
//The 0 at the end of the reduce function call is what the initial result is going to be. Without this, the inital result will be the first item in the array
//In the first example, we start with an initial result of zero and then we go through and add each item in the array to the result
//This would be good for getting a single return from an array of data. E.g. summing how many bookings have been made for a particular date



const reduceExample = (array) => {
    return sumArray = array.reduce(function (result,item){
        return result + item
    },0)
}

const sillyReduceExample = (array) => {
    const sillyAction = array.reduce(function (result,item,index){
        console.log("|This is the log|","result:",result,"item:",item,"index:",index)
        return `I am the result from index/iteration ${index}`
    },"I am the initial result")
    return sillyAction
}



const simpleArray = [1, 2, 3]
console.log(reduceExample(simpleArray))
//console.log(sillyReduceExample(simpleArray))