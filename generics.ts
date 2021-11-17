function deger1<T>(x: T): T {
    return x;
}

let sayi1 = deger1<number>(3);
let sayi2 = deger1<string>("Ankara");
console.log(sayi1);
console.log(sayi2);


///// CLASS MANTIĞI İLE  //////

class GenericClass<T> {
    degisken: T;

    fonksiyon(parametre: T): T {
        return parametre;
    }
}

let example = new GenericClass<number>();
example.fonksiyon(1);