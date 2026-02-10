// 19) შექმენით ობიექტი movie და გამოიყენეთ rest operator რომ year და country მოხვდეს details ობიექტში

let movie = {
    title : "inception",
    year : 2010,
    country : "usa"
}

let {year,country,...details} = movie;