// 4) შექმენით book ობიექტის კონსტრუქტორი რომელსაც ექნება 4 კუთვნილება: title, author, year, available, toggleAvailability (მეთოდი), შექმენით მინიმუმ 2 ობიექტი და შეამოწმეთ მეთოდის მუშაობა, კომენტარით ახსენით რა არის constructor და რისთვის გამოიყენება

 function book(title,author,year,available){
    this.title = title,
    this.author = author,
    this.year = year,
    this.available = available,
    this.toggleAvailability = function(){
        this.available != this.available
    }
 }


let jinsebisTaoba = new book("ჯინსების თაობა","დავით ტურაშვილი",2013,false);
let deathOnTheNile = new book("Death On The Nile","agatha christie",1937,true);

jinsebisTaoba.toggleAvailability();
deathOnTheNile.toggleAvailability();