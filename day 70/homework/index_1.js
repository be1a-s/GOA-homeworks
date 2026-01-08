// 3) შექმენით student ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: name, age, grade, active, promote (მეთოდი), შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ promote მეთოდი, საბოლოოდ გამოიტანეთ ყველა ობიექტი, კომენტარით ახსენით რა არის მეთოდი და რა განსხვავებაა property-სა და method-ს შორის

function student(name,age,grade,active,){
    this.name = name,
    this.age = age,
    this.grade = grade,
    this.active = active,
    this.promote = function(){
        this.active != this.active
    }
}

let beqa = new student("beqa",16,"B",true);
let saba = new student("saba",15,"C",false);
let nika = new student("nika",16,"B",true);

beqa.promote();
saba.promote();
nika.promote();




