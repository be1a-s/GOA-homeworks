// 4) შექმენით ფორმა, სადაც მომხმარებელი შეიყვანს საქმეს (task). ფორმის გაგზავნისას ეს საქმე დაემატოს სიაში (ul ელემენტში) როგორც ახალი li ელემენტი, რომლის გვერდით იქნება “შესრულებულია” ღილაკი. ღილაკზე დაჭერისას კონკრეტული საქმე უნდა გადახაზოს (text-decoration: line-through). გამოიყენეთ addEventListener ღილაკისთვის და კომენტარებით ახსენით როგორ ხდება კონკრეტული li ელემენტზე წვდომა და მისი სტილის შეცვლა

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let newli = document.createElement("li")
    let vl = inp.value ;
    let newbtn = document.createElement("button")
    newbtn.textContent = "done"
    newbtn.onclick = function() {
        newli.style.textDecoration = "line-through"
    }
    
    newli.innerHTML += `
        ${vl}
    `
    newli.appendChild(newbtn)
    ul.appendChild(newli)
})