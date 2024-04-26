let product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}
//Use property descriptors to make the price and quantity properties non-enumerable and non-writable.

const addProperties = () => {
    Object.defineProperties(product, {
        'price': {value: product.price,
            writable: false,
            enumerable: false
    
        },
        'quantity': {
            value: product.quantity,
            writable: false,
            enumerable: false
        }
    })
    
}

addProperties()

//Implement a function called getTotalPrice that takes the product object as an argument
// and returns the total price (calculated as price * quantity). Ensure that the function
// accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.
function getTotalPrice(product) {
    let price = Object.getOwnPropertyDescriptor(product, 'price').value;
    let quantity = Object.getOwnPropertyDescriptor(product, 'quantity').value;
    return price * quantity;
}

console.log(getTotalPrice(product)); //5 * 1000 = 5000


//Implement a function called deleteNonConfigurable that takes
// an object and a property name as arguments. The function should
// delete the specified property from the object if it exists.
// If the property is non-configurable, throw an error with an appropriate message.
function deleteNonConfigurable(obj, key) {
    if (Object.getOwnPropertyDescriptor(obj, key).configurable) {
        delete obj[key];
    } else {
        throw new Error('Property is non-configurable');
    }
}

deleteNonConfigurable(product, 'price');

console.log(Object.getOwnPropertyDescriptors(product));

try{
    console.log(getTotalPrice(product));
} catch (e) {
    console.log(e.message);
}

module.exports = {deleteNonConfigurable, getTotalPrice, product, addProperties}