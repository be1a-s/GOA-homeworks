// 1) შექმენით task ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: title, desc, state, deadline, complete (მეთოდი), შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ complete მეთოდი, საბოლოოდ გამოიტანეთ ყველა, კომენტარებით ახსენით რა არის ობიექტი და ჩამოწერეთ მისი 3-ვე ტიპის თვისება


function  Task(title,desc,state,deadline,complete){
    this.title = title,
    this.desc = desc,
    this.state = state,
    this.deadline = deadliene,
    this.complate = function(){
        this.state = !this.state
    }
}


let task1 = new Task("learn python","python courses","pending","05-11-26");
let task2 = new Task("learn javascript","javascript courses","pending","05-6-26");
let task3 = new Task("learn c++","c++ courses","pending","01-01-27")

task1.complete();
task2.complete();
task3.complete();

console.log(task1);
console.log(task2);
console.log(task3);