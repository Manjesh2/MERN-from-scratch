// Create a person object that contains three keys: name , age , and country
let person = {
    name: 'Manjesh',
    age: 24,
    country: "India"
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Manjesh is 24 years old and lives in Bihar"
function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

//Call the logData() function to verify that its works
logData()