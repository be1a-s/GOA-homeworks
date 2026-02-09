// 2) შექმენით textarea მესიჯის შემოტანის ველი, დაამატეთ მასზე keydown მოვლენის მსმენელი და როდესაც მომხმარებელი რაიმე სიბოლოს შეიტანს ამ ველში მაშინვე დაუთვალეთ ახალი სიმბოლოების რაოდენობა და უჩვენეთ რამდენი აქვს 200-იანი სიმბოლოების ლიმიტიდან გამოყენებული, თუ ლიმიტს გადასცდება პარაგრაფი უნდა გაწთილდეს, სხვა შემთხვევაში უნდა იყოს მწვანე

let t = document.querySelector("textarea");
let p = document.querySelector("p");


t.addEventListener("keydown", function(){
    let b = t.value.length;
    p.textContent = `${b}/200`
    if (b < 200){
        p.style.color = "green";
    }
    else if (b > 200){
        p.style.color = "red";
    }
})