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
