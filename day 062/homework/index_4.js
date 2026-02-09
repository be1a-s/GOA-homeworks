let inp = document.getElementById("ageinput");
let b = document.getElementById("ageBtn");
let p = document.getElementById("ageOut");


b.onclick= function(){
    let age = document.getElementById("ageinput").value;
    p.textContent = age;
    console.log(age)
}