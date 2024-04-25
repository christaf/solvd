// May I use class instead of object literal? I wouldn't have to add getter and setter to the 2nd object.
let bankAccount = {
    balance: 1000,

    get formattedBalance() {
        return '$' + this.balance;
    },

    set setBalance(value) {
        this.balance = value;
    }
}

let bankAccount2 = {
    balance: 0,
    get formattedBalance() {
        return '$' + this.balance;
    },

    set setBalance(value) {
        this.balance = value;
    }
}


//Use a getter to define a property called formattedBalance, which returns the balance with a currency symbol (e.g., "$1000").
//Use a setter to define a property called balance, which updates the account balance and automatically updates the corresponding formattedBalance value.

//setter throws an error due to name conflict, so I changed the name of the setter to setBalance

console.log(bankAccount.formattedBalance); //$1000
bankAccount.setBalance = 2000;
console.log(bankAccount.formattedBalance); //$2000

//Implement a method called transfer on the bankAccount object that takes two bankAccount objects and an amount as arguments.
// The method should transfer the specified amount from the current account to the target account.
// Ensure that the balance and formattedBalance properties of both accounts are updated correctly.


bankAccount.transfer = function (targetAccount, amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        targetAccount.balance += amount;
    } else {
        console.log('Insufficient funds');
    }
}

bankAccount.transfer(bankAccount2, 500);
console.log(bankAccount.formattedBalance); //$1500
console.log(bankAccount2.formattedBalance); //$500