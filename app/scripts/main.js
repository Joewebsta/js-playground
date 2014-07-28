'use strict';

// 4 **********************************

var speak = function(sayWhat) {
    console.log(sayWhat);

    // console.log(this.normal);
    // console.log(this.love);
    
};

var saySomething = {
    normal : 'meow',
    love : 'purr'
};

// speak.call(saySomething, saySomething.normal);
speak.apply(saySomething, ['meoff']);

// 3 **********************************

// var speak = function(sayWhat) {
//     console.log(sayWhat);
// };

// var Dog = function() {
//     var name, breed;
// };

// var Cat = function() {
//     var name, breed;
// };

// Dog.prototype.speak = speak;
// Cat.prototype.speak = speak;

// var firstDog = new Dog();
// firstDog.name = 'Molly';
// firstDog.breed = 'Pitbull';
// firstDog.speak('woof');

// var firstCat = new Dog();
// firstCat.name = 'Rue';
// firstCat.breed = 'Manx';
// firstCat.speak('meow');


// 2 **********************************

// var Dog = function() {
//     var name, breed;
//     console.dir(this);
// };

// var firstDog = new Dog();
// firstDog.name = 'Molly';
// firstDog.breed = 'Pitbull';

// var secondDog = new Dog();
// secondDog.name = 'Max';
// secondDog.breed = 'Husky';


// 1 **********************************

// var calc = {
//   status : "Awesome",
//   plus : function(a,b) {
//     console.log(this);
//     console.log(a+b);
//     console.log(arguments);
//     console.log(this.status);
//   }
// }

// calc.plus(2,2);