//Does any item in the array meet this condition. This would make it similar to filter except rather than returning the data that meets the condition, it just returns whether any item in the array meets the conditon
//This would be useful for something like cheking if any item on a shipment required two delivery persons and then assigining the delivery type for the whole shipment to "two person"
//The function stops iterating once it reaches the end of the array or when the callback function returns true

const someExample = (array) => {
    return arrayContainsNegativeNumbers.some(function (item) {
        return item < 0;
    })
}

const checkForTwoPersonItems = (itemsArray) => {
    return orderContainsTwoPersonItems.some(function (itemsArray.deliveryType) {
        return deliveryType == "2man"
    })
}

const simpleArray = [-1, 0, 1, 2, 3]
console.log(someExample(simpleArray))

const orderData = [
    {
        "orderRef": "ABC123",
        "items": [
            {
                "sku": "someMicrowave",
                "deliveryType": "1man"
            },
            {
                "sku": "someMicrowave",
                "deliveryType": "1man"
            },
            {
                "sku": "someHugeFridge",
                "deliveryType": "2man"
            }
        ]
    }
]

console.log(checkForTwoPersonItems(orderData.items))