var car = 'Subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
//string test(true)
console.log('Is car == "Subaru"? I predict true');
console.log(car == 'Subaru');
//strict equality(false)
console.log('Is car === "Subaru"? I predict false');
console.log(car === 'Subaru');
//inequality (true)
console.log('Is car != "Toyota"? Ipredict false');
console.log(car != 'Toyota');
//inequality test
console.log('Is car !== "subaru" I predict False');
console.log(car !== 'subaru');
//lower function test(True)
console.log('Is car.toLowerCase() == "subaru"? I predict True.');
console.log(car.toLowerCase() == "subaru");
//lower case(False)
console.log('Is car === car.toLowerCase()? I predict False');
console.log(car === car.toLowerCase());
//numeric tests
//equality (true)
console.log("Is age == 25? I predict true");
console.log(age == 25); //true
//inequality test (false)
console.log("is age != 30? I predict true");
console.log(age != 30);
//greater than
console.log("Is age > 30? I predict false");
console.log(age > 30); //false
//less than equal to
console.log("Is age <= 25? I predict true");
console.log(age <= 25); //true
//AND Operator
console.log("Is age > 20 && age < 30? I predict true");
console.log(age > 20 && age < 30); // true
//Or (false)
console.log("Is age >30 || age < 18? I predict false");
console.log(age > 30 || age < 18); //false
//array test
//in array true
console.log("Is 3 in numbers? I Predict true ");
console.log(3 in numbers); //true
//not in array
console.log("Is 5 not in number? I predict true");
console.log(5, not in numbers); //true
