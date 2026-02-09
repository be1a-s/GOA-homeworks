// // 7) შექმენით ორი ფუნქცია: 
// greet(name) ჩვეულებრივი function სინტაქსით აბრუნებს `Hello, ${name}`
// goodbye = (name) => `Goodbye, ${name}` arrow function-ის გამოყენებით
// ორივე გამოიძახეთ სხვადასხვა არგუმენტით და კომენტარებით ახსენით რა უპირატესობა აქვს arrow function-ს მოკლე, მარტივ ფუნქციებში და eventListener-ებში

function greet(name) {
    console.log(`hello, ${name}`)
}

let goodbye = (name1) => {
    console.log(`Goodbye, ${name1}`)
}

greet("beqa")
goodbye("beqa")