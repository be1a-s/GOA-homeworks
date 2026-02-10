// 7) შექმენით class BankAccount owner და balance ველებით. დაამატეთ deposit(amount) მეთოდი და static ცვლადი accountsCount. შექმენით ორი ობიექტი და გამოიძახეთ getAccountsCount()

class BankAccount {
    constructor(owner,balance){
        this.owner = owner;
        this.balance = balance;
       
    } 
    deposit(amount){
            this.balance =balance + amount
    }
}

let acc1 =BankAccount("beqa",1000);
let acc2 =BankAccount("luka",200);