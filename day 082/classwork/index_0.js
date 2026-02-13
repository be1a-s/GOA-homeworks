// 1) შექმენით 4 შესატანი ველი: სახელის, გვარის, ემაილისა და პაროლის. წამოიღეთ ფორმა js-ში, როდესაც მოხდება ფორმის დადასტურება გამოიძახეთ arrow ფუნქცია, ფუნქციაში წამოიღეთ ყველა შესატანი ველის მნიშვნლობა და მისი მეშვეობით შექმენით ახალი ობიექტი new Account (კლასის) მეშვეობით, ახალი შექმნილი ობიექტი შეინახეთ account ცვლადში და დაამატეთ accounts-ს მასივში


let form = document.querySelector("form");
let div = document.querySelector("div");
let accounts = []
class Account {
    constructor(fname,surname,email,password){
        this.firstname = fname
        this.lastname = surname
        this.Email = email
        this.pasw = password
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let firstname = form.elements.name.value;
    let lastname = form.elements.surname.value;
    let email = form.elements.email.value;
    let password = form.elements.password

    let account =new Account(firstname,lastname,email,password)
    accounts.push(account)
    console.log(accounts)
})
