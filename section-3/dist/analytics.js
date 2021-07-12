"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytics('this data');
//# sourceMappingURL=analytics.js.map