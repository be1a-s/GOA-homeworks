// 5) შექმენით ღილაკი Logout რომელზე დაჭერისას localStorage გასუფთავდება removeItem ან clear-ით და ეკრანზე გამოჩნდება შეტყობინება თქვენ გახვედით სისტემიდან

let btn= document.querySelector("button");

localStorage.setItem("username", "name");
localStorage.setItem("username2", "name2");

btn.addEventListener("click", function(){
    localStorage.clear();
    let p = document.createElement("p");
    p.textContent = "თქვენ გახვედით სისტემიდან"
    document.querySelector("body").appendChild(p)
    console.log(localStorage)
})
