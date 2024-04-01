"use strict";
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasly', 'Albus Dumbledore'];
function copy_array(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianarray = copy_array(magician);
make_great(copymagicianarray);
console.log('\n\nThis is my original array');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array');
show_magicians(copymagicianarray);
