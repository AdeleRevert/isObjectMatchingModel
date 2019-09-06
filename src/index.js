const isObject = value => {
    return value && typeof value === 'object' && value.constructor === Object;
};

// Function to compare a model and an object. If object has all nested properties of model, it returns true.
const isObjectMatchingModel = (obj1, obj2) => {
    let isTheSame = true;
    const keys = Object.keys(obj1);
    for (let i = 0; i < keys.length; i++) {
        const currKey = keys[i];
        if (isObject(obj1[currKey])) {
            if (obj2.hasOwnProperty(currKey)) {
                isTheSame = isObjectMatchingModel(obj1[currKey], obj2[currKey]);
            } else {
                isTheSame = false;
            }
        } else {
            isTheSame = obj2.hasOwnProperty(currKey);
        }
        if (isTheSame === false) {
            break;
        }
    }
    return isTheSame;
};

module.exports = {isObjectMatchingModel};
