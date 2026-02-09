// 2) შექმენით ღილაკი, რომელზე დაჭერისას body ელემენტში დაემატოს ახალი პარაგრაფი, რომელიც შეიცავს შემთხვევით რიცხვს 0-დან 1000-მდე დიაპაზონში. გამოიყენეთ Math.random და Math.floor ფუნქციები შემთხვევითი მთელი რიცხვის მისაღებად და კომენტარებით ახსენით რას აკეთებს თითოეული მათგანი

let btn = document.querySelector("button");

btn.onclick =  function(){
    let p = document.createElement("p");
    p.textContent = Math.floor(Math.random()*1000);
    document.querySelector("body").appendChild(p);
}

// queryselector ით გადმოგვაქვს ღილაი გვერდიდან ვინახავთ ცვლადში შემდეგ ვქმნით ელემენტს creatElement -ის მეშვეობით მის ტექსტურ მონაცემად ვაყენებთ ერთიდან ათასამდე რანდომულ რიცხვს და body თეგში ვამატებთ appendchild -ის მეშვეობით ყოველ ღილაკზე დაკლიკებაზე დაემატება პარაგრაფი რანდომ რიცხვით