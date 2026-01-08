// 8) შექმენით ვებგვერდი, რომელზეც გექნებათ 1 ღილაკი. ღილაკზე დაჭერისას უნდა შეიქმნას ახალი პარაგრაფი, რომელიც შეიცავს შემთხვევით რიცხვს 0-იდან 1000-მდე დიაპაზონში. პარაგრაფი ყოველ დაჭერაზე უნდა დაემატოს body თეგში. გამოიყენეთ createElement, textContent და appendChild მეთოდები. კომენტარებით ახსენით Math.random და Math.floor ფუნქციების დანიშნულება

let btn = document.querySelector("button");

btn.onclick =  function(){
    let p = document.createElement("p");
    p.textContent = Math.floor(Math.random()*1000);
    document.querySelector("body").appendChild(p);
}

// math.floor მეთოდი რიცხვს აშორებს წილად ნაწილს და ტოვებს მთელ ნაწილს math.random ნოლიდან ერთამდე რანდომულად ირჩევს რაიმე წილად რიცხვს