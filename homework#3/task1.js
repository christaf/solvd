class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const calculateDiscountedPrice = (products, discount) => {
    return products.map(product => {
        return {...product, price: product.price * (1 - discount / 100)};
    });
}

const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
}
module.exports = {calculateDiscountedPrice, calculateTotalPrice, Product};