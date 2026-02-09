// 6) შექმენით employee ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: name, position, salary, active, raiseSalary (მეთოდი), შექმენით მასივი employees და დაამატეთ მინიმუმ 3 ობიექტი, შემდეგ for ციკლში ყველა ობიექტზე გამოიძახეთ raiseSalary მეთოდი, საბოლოოდ გამოიტანეთ ყველა ობიექტი, კომენტარით ახსენით რა არის ობიექტების მასივი და როგორ მუშაობს for ციკლი მასთან


 function   Employees(name,position,salary,active){
    this.name = name,
    this.position = position,
    this.salary = salary,
    this.active = active,
    this.raiseSalary = function(){
        if (this.active != this.active){
            salary = salary + 200;
        }
    }
 }

let employee1 = new Employees("jaba","cashier",700,true);
let employee2 = new Employees("saba","consultant",500,false);
let employee3 = new Employees("saba","manager",1500,true);
let employees = [employee1,employee2,employee3]
let l = employees.length;
for (i of employees){
    i.raiseSalary();
}

for (i of employees){
    console.log(i)
}