// 4) შექმენით countdown ტაიმერი, სადაც ცვლადი time = 10 დაიკლებს ყოველ წამში ერთით. როდესაც მნიშვნელობა გახდება 0, უნდა გაჩერდეს ინტერვალი clearInterval ფუნქციით და კონსოლში გამოიტანოს ტექსტი "Time up". კომენტარებით დაწერეთ რას აკეთებს clearInterval

function countdown(e){

    setInterval(e = e - 1,10000)
    if (e < 0){
        clearInterval
    }
}

console.log(countdown(10))

// clearinterval შლის ყველა ინტერვალს