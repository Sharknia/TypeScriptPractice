"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var startup = /** @class */ (function () {
    function startup() {
    }
    startup.main = function () {
        var group = _.groupBy(['one', 'two', 'three'], 'length');
        console.log(group);
        return 0;
    };
    return startup;
}());
startup.main();
//# sourceMappingURL=HelloWorld.js.map