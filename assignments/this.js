/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of *this* will be the window/console object
* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object to the left of the dot is this
* 3. New binding: For constructor functions, *this* refers to the object that is created and returned by the constructor
* 4. Explicit Binding: Use .call or .apply to explicitly pass in the object to *this*
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const waveHello = (person) => {
    console.log(this);
    return person;
}
waveHello("Dude");

// Principle 2

// code example for Implicit Binding

const wagTail = {
    greeting: 'Wagging',
    excitedGreet: function(name) {
        console.log(`${this.greeting} my tail at ${name}`);
        console.log(this);
    }
};

wagTail.excitedGreet("Lady Delilah");

// Principle 3

// code example for New Binding

// function Animal(type) {
//     this.excited = 'tail wagging ';
//     this.angry = 'growling ';
//     this.greet = function() {
//         if (type === excited) {
//             console.log(this.excited + 'at you');
//         } elseif (type === angry) {
//             console.log(this.angry + 'at you');
//         }
//     }
// }

function Animal(type) {
    this.doggy = 'tail wagging ';
    this.cats = 'growling ';
    this.greet = function() {
        if (type === 'dog') {
            console.log(this.doggy + 'at you');
        } else if (type === 'cat') {
            console.log(this.cats + 'at you');
        }
    };
}

const dog = new Animal('cat');
const cat = new Animal('dog');

dog.greet();
cat.greet();

// Principle 4

// code example for Explicit Binding

function animalActivity() {
    this.name = 'Animal Name';
    this.property = 'Activity'
}

animalActivity.prototype.doItUp = function (action) {
    console.log(this.name + ' is ' + action);
}

let animalObject = new animalActivity();

let elephant = { name: 'Fuzzles', activityType: 'trumpeting' };

animalActivity.prototype.doItUp.call(elephant, elephant.activityType);