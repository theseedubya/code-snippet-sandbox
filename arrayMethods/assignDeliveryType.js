//This started as an idea I had while learning about the "some" method as I thought it was a niche function and wanted to try and crowbar it in somewhere
//I realised this could help solve a business issue for determining how to group orders to carriers
//Sometimes it is desired for parcels to be sent with the same courier to ensure the same delivery date. 
//"some" could help with this by determining if a courier is present in a list of orders and assign this as the transport route for everything.
//This does not work yet but I will revisit

const checkForTwoPersonItems = (itemsArray) => {
    const isTwoMan = itemsArray.some(function (item) {
        return item.deliveryType == "2man"
    })
    return isTwoMan ? "LargeCarrier" : "SmallCarrier"
}

const orderData = 
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

console.log(JSON.parse(JSON.stringify(orderData)))