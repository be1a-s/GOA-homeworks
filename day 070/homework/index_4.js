// 5) შექმენით car ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: brand, model, year, mileage, drive (მეთოდი), drive მეთოდმა უნდა გაზარდოს mileage 100-ით ყოველი გამოძახებისას, შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ drive მეთოდი ორჯერ, კომენტარით ახსენით რა არის ობიექტი და როგორ იქმნება ის კონსტრუქტორით

function car(brand,model,year,milage){
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.milage = milage,
    this.drive = function(){
        milage = milage + 100
    }
}

let Mercedes = new car("mercedes","G class",2018,20000);
let BMW = new car("BMW","M 5",2016,300000);
let Mazda = new car("Mazda","cx 7",2014,5000);

Mercedes.drive();
Mercedes.drive();
BMW.drive();
BMW.drive();
Mazda.drive();
Mazda.drive();