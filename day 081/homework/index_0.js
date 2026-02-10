// 2) შექმენით ობიექტი user, სადაც property-ის სახელი უნდა იყოს დინამიური ცვლადიდან მიღებული. გამოიყენეთ computed property syntax [variable] და დაამატეთ username, email და score ველები. შემდეგ შექმენით ფუნქცია increaseScore(amount), რომელიც გაზრდის score-ს


let kay1 = "username";
let kay2 = "email";
let kay3 = "score";

let user = {
    name1 : "beqa",
    [kay1] : "user",
    [kay2] : "mail",
    [kay3] : 1000,
    increaseScore(amount){
        this.kay3 += amount
    }
}

