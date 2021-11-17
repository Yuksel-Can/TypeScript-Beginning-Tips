function deger1(x) {
    return x;
}
var sayi1 = deger1(3);
var sayi2 = deger1("Ankara");
console.log(sayi1);
console.log(sayi2);
///// CLASS MANTIĞI İLE  //////
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var example = new GenericClass();
example.fonksiyon(1);
