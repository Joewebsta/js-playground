'use strict';

// 2 *****************

var Dog = function() {
    var name, breed;
    console.dir(this);
};

var firstDog = new Dog;
    firstDog.name = 'Molly';
    firstDog.breed = 'Pitbull';

var secondDog = new Dog;
    secondDog.name = "Max";
    secondDog.breed = "Husky";


// 1 *****************

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