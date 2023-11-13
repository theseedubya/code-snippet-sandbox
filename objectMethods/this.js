//Inside of objects, you can assign functions to object parameters. 
//To access properties of the object you can use the "this" keyword to point to properties inside of that object to use them in your function
//Don't forget that arrow syntax and standard function syntax affect the behaviour of this

const sampleObject = {
    firstName: "See",
    lastName: "Dubya",
    age: 123,
    ocupation: "Web Developer",
    favouriteBands: ["Oasis","Blossoms","The Lottery Winners"],
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(sampleObject.fullName());