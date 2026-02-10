// 18) შექმენით ობიექტი school nested director ობიექტით და გამოიტანეთ director-ის სრული სახელი nested destructuring-ით

let school = {
    name1 : "პირველი საჯარო სკოლა",
    director:{
        firstname : "არკად",
        lastname : "ართმელაძე"
    }
}

let {
    director: {firstname,lastname}
 } = school

console.log(firstname + " " + lastname)