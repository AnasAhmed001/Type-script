function storecarsInfo(manufacturer:string, modelname:string, ...extraoptions: {[key : string]: any} []){

    const carInfo = {
        manufacturer,
        modelname,
        ...Object.assign({}, ...extraoptions)
    }

    return carInfo;
};

let answer = storecarsInfo('Honda','Civic', {colour:'black'}, {features: ['Navigation', 'Power window']})
console.log(answer);

