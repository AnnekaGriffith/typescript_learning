"use strict";
const button = document.querySelector('button');
let id = 'Max';
function ClickHandler(message) {
    console.log('Clicked!' + message);
    return true;
}
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return 0;
}
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', ClickHandler.bind(null, "you are Welcome!"));
}
//# sourceMappingURL=app.js.map