// 3) გატესტეთ და გამოიყენეთ თითეული მოვლენა, ასევე აღწერეთ თუ როდის მოხდება ეს მოვლენები

// onclick
// onload
// onunload
// onchange
// onmouseover
// onmouseout
// onmousedown
// onmouseup
// onblur
// onfocus

let btn = document.querySelector("button");
let c = btn.style.backgroundColor;
let b =document.querySelector("body");
let t = document.querySelector("textarea")
let v = t.value ;

// ხდება დაკლიკებისას
btn.onclick = function() {
    btn.style.backgroundColor = "red"
}
// ხდება რაიმის შეცვლისას
v.onchange = function() {
    t.style.backgroundColor = "green"
}
// თუ მაუსი არის თეგზე
btn.onmouseover = function() {
    btn.innerHTML ="in"
    btn.style.backgroundColor = "green"
}
// თუ თეგს მოშორდა
btn.onmouseout = function() {
    btn.innerHTML ="out"
}
// როცა დააჭერ
t.onmousedown = function() {
    t.style.backgroundColor = "green"
}
// როცა აუშვებ
t.onmouseup = function() {
    t.style.backgroundColor = "red"
}
// ფოცუსისდროს
t.onfocus = function() {
    t.style.backgroundColor = "white"
}
// ფოკუსის დაკარგვა
t.onblur = function() {
    t.style.backgroundColor = "black"
}

