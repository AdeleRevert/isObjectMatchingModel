const {isObjectMatchingModel} = require('./index.js');
const assert = require('assert');

const model = {
    prop1: 'coffee',
    prop2: {
        prop21: 23,
    },
    prop3: {
        prop31: {
            prop311: 'unicorn',
        },
    },
};

const objToCompare = {
    prop1: 'cold brew',
    prop2: {
        prop21: 63,
    },
    prop3: {
        prop31: {
            prop311: 'fairy',
        },
    },
};

const objToCompareThatIsWrong = {
    prop1: 'turmeric latte',
    prop2: {
        prop21: 27,
    },
    prop3: {},
};

assert(isObjectMatchingModel(model, objToCompare) === true);
assert(isObjectMatchingModel(model, objToCompareThatIsWrong) === false);
