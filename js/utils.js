"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils(str) {
        this.str = "";
        this.str = str;
        //auto run
    }
    Utils.prototype.toLowerCase = function () {
        return this.str.toLowerCase();
    };
    Utils.prototype.toUpperCase = function () {
        return this.str;
    };
    Utils.prototype.replace = function () {
        this.str = this.str.replace(/[\W\s_]/g, "");
    };
    Utils.prototype.split = function () {
        this.str = this.str.split("").join();
    };
    Utils.prototype.cleanStr = function () {
        this.replace();
        this.split();
    };
    Utils.prototype.reverse = function () {
        var reverseStr = "";
        var length;
    };
    Utils.prototype.generatePassword = function () {
        var pwd = this.str + Date.now().toString();
        return pwd.split;
    };
    return Utils;
}()); //add a class that has a method to add, subtract, divide and multiple and have an extra function that generates an alphanumeric(numbers and alphabets) string and must have at least 5 random zeros
exports.default = Utils;
//min of 14 and max of 18 characters
//password generator app
