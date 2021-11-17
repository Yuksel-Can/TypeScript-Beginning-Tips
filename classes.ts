class Ev {

    odaSayisi: number;
    pencereSayisi: number;
    kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    yemekYe() {
        console.log("Yemek yenildi, oda s:" + this.odaSayisi)
    }
}

let ev = new Ev(3, 4, 5);
ev.yemekYe();

class User {

    protected _firstName: string;

    constructor(firstName: string) {
        this._firstName = firstName;
    }

    get firstName(): string {
        return "Sayın : " + this._firstName;
    }
    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    save() {
        console.log("User Saved")
    }
}
class Customer extends User {

    cart() {
        console.log("Cart Empty")
    }
}
class Personel extends User {

    salaryUpdate() {
        console.log(this.firstName + ", Salary UPDATED")
    }
}

let musteri = new Customer("Can1");
musteri.save();
musteri.cart();
console.log(musteri.firstName);
let personel1 = new Personel("Can2");
personel1.salaryUpdate();