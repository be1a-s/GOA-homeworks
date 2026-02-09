// 7) შექმენით notes list გვერდი, სადაც მომხმარებელს ექნება შესატანი ველი და ღილაკი "დამატება". როდესაც მომხმარებელი ტექსტს ჩაწერს და ღილაკს დააწკაპუნებს, ტექსტი დაემატება სიაში როგორც ახალი ელემენტი. თითოეულ ელემენტს გვერდით უნდა ჰქონდეს წაშლის ღილაკი, რომლის დაჭერისას აღნიშნული ელემენტი სიიდან წაიშლება

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.onclick= function (){
    let newnote = document.createElement("li");
    let newbtn = document.createElement("button")
    newnote.textContent = inp.value;
    newbtn.textContent = "remove";
    newbtn.onclick = function() {
        newnote.remove()
    }
    ul.appendChild(newnote);
    newnote.appendChild(newbtn);
}
