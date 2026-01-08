// 6) შექმენით ინტერვალი, რომელიც ყოველ 1 წუთში ერთხელ (60000 ms) ზრდის time ცვლადს ერთით და კონსოლში წერს "Current minutes: " +
//  time. როდესაც time გახდება 34, უნდა გაჩერდეს ინტერვალი და გამოიტანოს ტექსტი "Time up". კომენტარებით ახსენით როგორ მუშაობს clearInterval და რატომ ვამოწმებთ პირობას if(time === 34)

let i = 0;

const timer = setInterval(() =>{
    i++;
    if(i === 34){
        console.log("time up")
        clearInterval(timer)
    }
},60000)

