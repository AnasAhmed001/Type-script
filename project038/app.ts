function describe_city(nameofcity: string, country: string="Pakistan"){
    return `${nameofcity} is in ${country}`
}

//3 cities

let city1 = describe_city("Karachi");
let city2 = describe_city("Dehli" , "India");
let city3 = describe_city("Cape town" , "South Africa");
let city4 = describe_city("UAE" , "Dubai");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);


