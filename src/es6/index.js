//normal JavaScript
function newFunction(name, age, country){
    var name = name || 'Diego';
    var age = age || 19;
    var country = country || 'México'
    console.log(name, age, country)
}

//ECMAScript:
function newFunction2(name = 'Diego', age = 19, country = 'México'){
    console.log(name, age, country);
};
newFunction2();
newFunction2('Eduardo', 42, 'México');

//Template literals
let hello = 'Hello';
let world = 'World';
//Normal
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
//ECMAScript 6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//Multi line
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "another epic phrase that we need"
console.log(lorem)
//ECMAScript 6
let lorem2  = `Another epic phrase that we need
now, this is a new epic phrase`;
console.log(lorem2)

//
let person = {
    'name': 'Diego',
    'age': 19,
    'country': 'México'
}
console.log(person.name, person.age, person.country)
//This is how we destruc the elements
let = {name, age, country} = person
console.log(name, age, country)

//Spread
let team1 = ['Diego', 'Kenneth', 'Eduardo'];
let team2 = ['Sofia', 'Ingrid', 'Itzel'];
let education = ['Rogelio', ...team1, ...team2];
console.log(education);

//Difference between let and var
{
    var globalVar = 'Global var'
}

{
    let globalLet = 'Global let'
    console.log(globalLet)
}
console.log(globalVar)

//Constants: Can't change
const a = 'b'

let name = 'Diego'
let age = 19
//Before:
obj = {name:name, age:age}
//ECMAScript6
obj2 = {name, age}
console.log(obj2)

//Past functions
const names = [
    {name: 'Diego', age: 19},
    {name: 'Eduardo', age: 42}
]
let listOfNames = names.map(function(item){
    console.log(item)
})

//ARROW functions
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {}

const listOfNames4 = name => {}

const square = num => num * num

//Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        } else{
            reject('Ups!!')
        }
    })
}
helloPromise()
 .then(response => console.log(response))
 .then(() => console.log('HEEEEEEEEEEEEEY!!!'))
 .catch(error => console.log(error))

//Classes with ECMAScript6
class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(8301283, 874623842))

//Modules
import {hello} from './module'
hello()

//Generators
function * helloWorld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'world'
    }
}
const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)