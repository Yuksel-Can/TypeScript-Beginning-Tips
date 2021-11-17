abstract class KrediBase {

    constructor() {

    }

    kaydet(): void {
        console.log("Kaydedildi")
    }
    abstract hesapla(): void;    //tüm miras alanlar kullansın demektir
}

class TuketiciKredi extends KrediBase {

    constructor() {
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisi hesaplandı");
    }
}

let tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.kaydet();
tuketiciKredisi.hesapla();