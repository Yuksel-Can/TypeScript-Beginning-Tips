interface Product {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product) {
    console.log(product.name + " saved");
}

save({ id: 1, name: "laptop", unitPrice: 11 });
