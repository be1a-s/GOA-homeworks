// 1) შექმენით ვებგვერდი რომელზეც გექნებათ სარეგისტრაციო ფორმა სახელის, ემაილისა და პაროლის შესატანი ველებით, ასევე დამდასტურებელი ღილაკით. როდესაც მომხმარებელი გააგზავნის ინფორმაციას ღილაკზე დაჭერით, თქვენ ეს ინფორმაცია უნდა შეინახოთ (პირობითად) dataBase სიაში ობიექტის სახით, ესეიგი წამოღეთ ყველა HTML-ის ელემენტი javascript-ში შემდეგ ღილაკზე onclick მოვლენისას შექმენით ახალი ანგარიშის (account) ობიექტი რომელშიც მოცემუილი იქნება მომხარებლის სახელი, ემაილი და პაროლი. დამატების შემდეგ გვერდზე გაასუფთავეთ შესატანი ველები, თითოეული account ობიექტი დაამატეთ dataBase მასივში. დაამატეთ კიდევ ერთი ღილაკი ტექსტით print data რომელზე დაჭერისასაც დაიბეჭდება dataBase მასივი



let name1 = document.getElementById("name");
let email1 = document.getElementById("email");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");
let p = document.getElementById("p")

let list1 = []

btn.onclick = function() {
    let document = {
        name : name1.value,
        email: email1.value,
        password: psw.value
    }
    list1.push(document)
}

p.onclick = function() {
    console.log(list1)
}


