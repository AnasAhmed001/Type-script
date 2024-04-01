"use strict";
function makeSandwitches(item) {
    console.log('\nMake your sandwitch with: ');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwitch!\n');
}
makeSandwitches(['Ham', 'Cheese', 'Lettuce']);
makeSandwitches(['Turkey', 'Bacon']);
makeSandwitches(['Peatun butter', 'Jelly']);
