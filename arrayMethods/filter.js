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

const filterDyasStockFeed = (array) => {
    return inStock = array.filter(function (item) {
        return item.data.supplier_free_stock != 0
    })
    //if we declare evens as a variable rather than return it then we can return here
    return evens
}

const transformAndZeroStockOutput = [
    {
        "productId": "586488",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586308",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586297",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586332",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586452",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586597",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586478",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586523",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586230",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586592",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586245",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586542",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586254",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586600",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586504",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586240",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586569",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586380",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586367",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586252",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586278",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586545",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586268",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586212",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586314",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586307",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586231",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586247",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586508",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586435",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586420",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586503",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586290",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586325",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586341",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586449",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586555",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586577",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586387",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586241",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586279",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586238",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586589",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586461",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586299",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586371",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586500",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586467",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586521",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586501",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586226",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586264",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586593",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586474",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586224",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586538",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586519",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586506",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586318",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586470",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586350",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586338",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586529",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586596",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586460",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586403",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586540",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586253",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586493",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586351",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586243",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586520",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586572",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586225",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586381",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586430",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586444",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586402",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586413",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586548",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586517",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586463",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586602",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586560",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586302",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586347",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586415",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586466",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586242",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586418",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586535",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586391",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586502",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586532",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586543",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586586",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586219",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586373",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586567",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586372",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586223",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586269",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586292",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586516",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586512",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586595",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586384",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586585",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586324",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586365",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586368",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586345",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586481",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586340",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586357",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586579",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586527",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586550",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586537",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586464",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586484",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586588",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586271",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586363",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586472",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586498",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586534",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586539",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586329",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586458",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586217",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586454",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586221",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586559",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586311",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586419",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586434",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586469",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586208",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586479",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586339",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586581",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586390",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586566",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586491",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586590",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586468",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586293",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586655",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586575",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586277",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586492",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586436",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586442",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586235",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586392",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586386",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586409",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586433",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586437",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586298",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586429",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586313",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586448",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586317",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586349",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586414",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586515",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586522",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586234",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586405",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586511",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586494",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586287",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586421",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586598",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586431",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586462",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586281",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586358",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586229",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586385",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586450",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586233",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586244",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586286",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586267",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586273",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586295",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586294",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586296",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586303",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586305",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586310",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586306",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586333",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586343",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586312",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586323",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586348",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586352",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586353",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586355",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586366",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586378",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586364",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586376",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586377",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586389",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586397",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586404",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586399",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586410",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586412",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586422",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586423",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586426",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586424",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586428",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586438",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586445",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586440",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586446",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586453",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586457",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586475",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586477",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586482",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586485",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586505",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586499",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586507",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586514",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586509",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586510",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586528",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586544",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586546",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586530",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586536",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586556",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586558",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586553",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586568",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586565",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586571",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586573",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586574",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586578",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586587",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586591",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586601",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586594",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586599",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586603",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586291",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586362",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586447",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586258",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586334",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586443",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586210",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586320",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586214",
        "data": {
            "supplier_free_stock": 9696,
            "lead_time_days": 5
        }
    },
    {
        "productId": "586255",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586251",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586495",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586232",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586726",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586276",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586580",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586209",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586327",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586360",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586213",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586417",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586432",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586328",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586562",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586260",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586272",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586239",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586407",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586344",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586222",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586395",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586337",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586330",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586342",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586289",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586480",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586316",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586476",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586257",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586262",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586346",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586263",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586406",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586456",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586490",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586218",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586401",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586427",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586315",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586275",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586547",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586335",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586248",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586483",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586215",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586246",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586300",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586211",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586411",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586285",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586382",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586396",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586280",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586284",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586220",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586274",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586561",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586398",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586331",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586416",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586471",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586439",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586304",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586388",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586374",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586441",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586533",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586227",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586451",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586207",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586236",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586408",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586288",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586359",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586336",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586496",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586216",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586261",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586283",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586309",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586525",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586250",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586270",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586455",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586487",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586259",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586725",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586582",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586228",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586282",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586361",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586513",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586551",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586321",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586583",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586570",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586326",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586400",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586425",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586266",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586379",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586473",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586554",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586524",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586541",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586369",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586354",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586394",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586486",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586237",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586383",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586531",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586465",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586301",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586356",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586497",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586526",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586563",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586249",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586265",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586557",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586576",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586322",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586393",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586584",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586319",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586375",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586518",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586459",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586489",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586549",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586552",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586564",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586370",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    },
    {
        "productId": "586256",
        "data": {
            "supplier_free_stock": 0,
            "lead_time_days": ""
        }
    }
]

console.log(filterDyasStockFeed(transformAndZeroStockOutput))