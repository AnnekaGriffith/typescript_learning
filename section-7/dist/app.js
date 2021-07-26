"use strict";
function merges(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merges({ name: 'Tax', due: new Date }, { type: 'Federal' });
console.log(mergedObj);
console.log(mergedObj.type);
console.log(mergedObj.due);
const mergeO = merges({ name: 'Tax', due: new Date }, { owe: 75, currency: 'usd' });
console.log(mergeO);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' element.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([10, 78, 90]));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Chicken' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Hog');
textStorage.addItem('Hog');
textStorage.addItem('Hog');
textStorage.addItem('kitten');
console.log(textStorage.getItems());
textStorage.removeItem('Hog');
console.log(textStorage.getItems());
const NumTextDate = new DataStorage();
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Constable' });
objStorage.addItem({ name: 21 });
objStorage.removeItem({ name: 'Constable' });
console.log(objStorage.getItems());
const hench_24 = { name: 24 };
objStorage.addItem(hench_24);
console.log(objStorage.getItems());
objStorage.removeItem(hench_24);
console.log(objStorage.getItems());
//# sourceMappingURL=app.js.map