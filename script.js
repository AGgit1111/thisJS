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

/* Arrow Functions:
   The arrow function inside 'setInterval' inherits 'this' from 'Timer', so it
   correctly referes to the new 'Timer' object. */
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000); // 1000 milliseconds = 1 second, using 'setInterval'.
}
new Timer();
// 'Timer()' will run continuously. 'ctrl + c' to stop.