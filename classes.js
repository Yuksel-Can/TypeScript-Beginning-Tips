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
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log("Yemek yenildi, oda s:" + this.odaSayisi);
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
var User = /** @class */ (function () {
    function User(firstName) {
        this._firstName = firstName;
    }
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return "Sayın : " + this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.save = function () {
        console.log("User Saved");
    };
    return User;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.cart = function () {
        console.log("Cart Empty");
    };
    return Customer;
}(User));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.salaryUpdate = function () {
        console.log(this.firstName + ", Salary UPDATED");
    };
    return Personel;
}(User));
var musteri = new Customer("Can1");
musteri.save();
musteri.cart();
console.log(musteri.firstName);
var personel1 = new Personel("Can2");
personel1.salaryUpdate();
