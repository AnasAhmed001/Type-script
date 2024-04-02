"use strict";
function storecarsInfo(manufacturer, modelname, ...extraoptions) {
    const carInfo = Object.assign({ manufacturer,
        modelname }, Object.assign({}, ...extraoptions));
    return carInfo;
}
;
let answer = storecarsInfo('Honda', 'Civic', { colour: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answer);
