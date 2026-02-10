// შექმენით account ობიექტი რომელშიც კუთვნილების სახელები იქნება გამოსახულებები, კუთვნიელბის სახელები იყოს რაიმე ცვლადები და ზოგ შემთხვევაში string-ების კონკატინაცია, შექმენით deposit რომელიც ობიექტის this.balance კუთვნილებას გაზრდით amount პარამეტრით, ეს მეთოდი 2-ჯერ გამოიძახეთ, შემდეგ შექემნით person ობიექტი რაიმე სხვა კუთვნილებებითა და balance-ით, შემდეგ ამ ორი 2 ობიექტის Object.assign() მეთოდით გაერთიანებით შექმენით personAccount ობიექტი სამივე ობიექტი გამოიტანეთ კონსოლში. შემდეგ dataArr მასივი 3 ელემენტი და მოახდინეთ მისი დესქტრურირება სამივე ელემენტი შეინახეთ 3 სხვასხვა ცვლადშ და გამოიტანეთ კონსოლში, კომენტარებით ახსენით ყველაფერი

let object1 = {
    name1 : "beqa",
    lastname : "abuladze",
    age : 16,
    height : 1.60,
    fullname : name1 + lastname,
}


let deposit = {
    acc : "beqa",
    balance : 50,
    amount() {
        this.balance += 50
    }
}

deposit.amount();
deposit.amount();

let person = {
    acc:"beqa",
    balance : 100,
    lastname : "abuladze"
}

let acount = Object.assign(deposit,person);
console.log(acount)

let arr = [deposit,acount,person];

let [acc1, acc2, acc3] = arr;

console.log(acc1)
console.log(acc2)
console.log(acc3)