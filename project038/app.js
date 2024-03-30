function describe_city(nameofcity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameofcity, " is in ").concat(country);
}
//3 cities
var city1 = describe_city("Karachi");
var city2 = describe_city("Dehli", "India");
var city3 = describe_city("Cape town", "South Africa");
var city4 = describe_city("UAE", "Dubai");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
