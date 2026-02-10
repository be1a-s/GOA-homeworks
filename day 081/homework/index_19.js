// 21) შექმენით ფორმა 5 ველით (სახელი, გვარი, იმეილი, პაროლი, ქალაქი). მონაცემებით შეიქმნას Account კლასის ობიექტი და დაემატოს accounts მასივში. დაამატეთ printDetails მეთოდი -

let name1 =document.getElementById("name");
let surname =document.getElementById("surname");
let email =document.getElementById("email");
let psw =document.getElementById("password");
let city =document.getElementById("city");

let account = {
    name2 : name1.value,
    email2 : email.value,
    surname2 : surname.value,
    psw2 : psw.value,
    city2 : city.value,
    printDetails(){
        console.log(`name: ${name2} email: ${email2} password: ${psw2} city: ${city2}`)
    }
}

let acounts = [];

acounts.push(account)