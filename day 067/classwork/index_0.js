// 1) ვებგვერდზე მომხმარებელს prompt-ის გამოყენებით შემოტანინეთ თაივსი გამოცდისა და აქტიურობის ქულები, შემდეგ გარდაქმენით ისინი რიცხვებად Numbert ან ParseInt ფუნქციების გამოყენებით, შემდეგ შეკრიბეთ და შეამოწმეთ თუ როემლ კატეროგიაში მოხვდა ეს ქულა, რის მიხედვითაც გამოუტანთ მოსწავლეს შეფასბეას

// A 90-100
// B 80-90
// C 70-80
// D 50-70
// E 30-50
// F <30

let b = document.getElementById("btn");
let p = document.getElementById("par");

b.onclick = function() {
    let a =parseInt(prompt("enter your score"))
    if (a >= 90) {
        p.textContent = "A"
    } else if (a >= 80) {
        p.textContent = "B"
    } else if (a >= 70) {
        p.textContent = "C"
    } else if (a >= 50) {
        p.textContent = "D"
    } else if (a >= 30) {
        p.textContent = "E"
    } else{
        p.textContent = "F"
    }
}