//CALL()

var person1 = {firstName: 'Koro', lastName: 'sensei'};
var person2 = {firstName: 'Gojo', lastName: 'sensei'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello koro sensei
say.call(person2, 'Hello'); // Hello Gojo sensei


//APPLY()

var person1 = {firstName: 'Koro', lastName: 'sensei'};
var person2 = {firstName: 'Gojo', lastName: 'sensei'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello koro sensei
say.apply(person2, ['Hello']); // Hello Gojo sensei

//BIND()

var person1 = {firstName: 'Koro', lastName: 'sensei'};
var person2 = {firstName: 'Gojo', lastName: 'sensei'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello koro sensei
sayHelloKelly(); // Hello Gojo sensei