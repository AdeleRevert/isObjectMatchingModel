
## What is it?
Function to compare a model and an object. If object has all nested properties of model, it returns true.

## Get started

````npm i isobjectmatchingmodel -S````

## How to use it?

````
isObjectMatchingModel({prop1:11}, {prop1:22}); 
// output true

isObjectMatchingModel({prop1:11, prop2: {prop21: 'sugar glider'}}, {prop1:11, prop2: {prop21: 'unicorn'}}); 
// output true

isObjectMatchingModel({prop0:11, prop2: {prop21: 'sugar glider'}}, {prop1:11, prop2: {prop21: 'unicorn'}}); 
// output false
````