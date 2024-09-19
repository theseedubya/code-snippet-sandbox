export function sortObject(originalData) {
  const dataKeys = Object.keys(originalData);
  const sortedKeys = dataKeys.sort();
  const orderedData = {}

  for (let i = 0; i < sortedKeys.length; i++) {
    let currentKey = sortedKeys[i]
    let currentKeyValue = originalData[currentKey]
    let currentKeyType = Object.prototype.toString.call(originalData[currentKey])
    //console.log(`${currentKey} is type ${currentKeyType}`)
    if (currentKeyType == "[object Array]") {
      for (let j = 0; j < currentKeyValue.length; j++) {
        let arrayResult = sortObject(originalData[currentKey])
        Object.assign(orderedData, {[currentKey]: arrayResult})
      }
    } else if (currentKeyType == "[object Object]") {
      let objectResult = sortObject(originalData[currentKey])
      Object.assign(orderedData, {[currentKey]: objectResult})
    } else
      Object.assign(orderedData, {[currentKey]: currentKeyValue})
  }

  return orderedData
}