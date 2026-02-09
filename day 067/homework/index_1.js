// 3) შექმენით ფორმა ვებგვერდზე, რომელსაც ექნება: სახელი, იმეილი, პაროლი და "დაადასტურე პაროლი" (confirm). როცა მომხმარებელი დააწვება Submit ღილაკს:

// შეამოწმეთ თუ რომელიმე ველი ცარიელია — თუ ცარიელია, alert-ით მოთხოვეთ სრული ინფორმაციის შეყვანა
// თუ პაროლი მოკლეა (length < 8) — alert-ით უთხარით უფრო დიდი პაროლის შეყვანა
// თუ პაროლი და confirm_password ერთმანეთს არ ემთხვევა — გაუშვით alert რომ პაროლები არ ემთხვევა
// შეამოწმეთ რომ იმეილი შეიცავდეს '@' და '.' — თუ არა, დააბრუნეთ შენიშვნა
// // თუ ყველა პირობა დაკმაყოფილდა, გამოიტანეთ alert: "რეგისტრაცია წარმატებული" ან ჩაწერეთ მომხმარებლის სახელი გვერდზე

let i1 = document.getElementById("name");
let i2 = document.getElementById("email");
let i3 = document.getElementById("password");
let i4 = document.getElementById("cpassword");
let btn = document.getElementById("submit");

btn.onclick = function() {
    let val1 = i1.value ;
    let val2 = i2.value ;
    let val3 = i3.value ;
    let val4 = i4.value ;

    if (val1 === "" || val1 === " ") {
        alert("you need name")
    }else if (val2 === "" || val2 === " ") {
        alert("you need email")
    }else if (val3 === "" || val3 === " ") {
        alert("you need password")
    }else if (val4 === "" || val4 === " ") {
        alert("now you are costumer")
    }else if (!"@" in val2 ) {
        alert("you need correct email")
    }else if (val3.length() < 8) {
        alert("you need longer password")
    }else if (val3 != val4) {
        alert("incorrect password")
    }
}