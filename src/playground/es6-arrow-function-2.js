//arguments object - no longer bound with arrow functions
const add = (a , b) => {
    //console.log(arguments);
 return a + b;
}
console.log(add(55,  1));



//this keyword - no longer bound with arrow functions

const user = {
    name: 'Dominique',
    cities: ['houston', 'pearland', 'san antonio'],
    printPlacesLived() {

    return this.cities.map((city) => this.name + 'has lived in ' + city + '!');
  }
};

console.log(user.printPlacesLived());

//challenge area

const multiplier = {
    numbers: [2, 4, 6], // numbers - array of numbers
    multiplyBy: 3,// multiplyBy - single number
    multiply() { // happens inside multiply method - return new array where the number have been multipled
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());