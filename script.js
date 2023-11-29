/* Object Methods:
   'this' inside 'greet' refers to 'person'. */
// Define an object named 'person'
const person = {
    // Property 'name' with the value 'Alice'
    name: 'Alice',
    // Method 'greet' within the 'person' object
    greet: function () {
        // 'this' refers to the 'person' object in this context
        // 'this.name' accesses the 'name' property of the 'person' object
        console.log('Hello, ' + this.name);
    }
};
// Call the 'greet' method on the 'person' object
person.greet(); // Outputs: 'Hello, Alice'
