var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(type, name) {
        this.type = type;
        this.name = name;
    }
    return Animal;
}());
var MyCat = /** @class */ (function (_super) {
    __extends(MyCat, _super);
    function MyCat(type, name, gender) {
        var _this = _super.call(this, type, name) || this;
        _this.type = type;
        _this.name = name;
        _this.gender = gender;
        return _this;
    }
    MyCat.prototype.makeSound = function () {
        console.log('meow!!');
    };
    return MyCat;
}(Animal));
var tommy = new MyCat('mammal', 'tommy', 'male');
console.log('tommy da', tommy);
