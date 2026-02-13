// 7) შექმენით promise რომელიც 2 წამში შეამოწმებს weatherIsGood ცვლადს თუ true იყოს resolve გამოიტანს ტექსტს ამინდი კარგია გასეირნება შემიძლია თუ false იყოს reject ამინდი ცუდია ვერ გავდივარ კომენტარებით ახსენით რა არის pending მდგომარეობა


let promise = new Promise((resolve,rejecte)=>{
    let weatherIsGood = true;
    setTimeout(()=>{
        if(weatherIsGood===true){
            resolve("ამინდი კარგია გასეირნება შემიძლია")
        }
        else{
            rejecte("ცუდი ამინდია ვერ გავალ")
        }
    }, 3000)
})    


setInterval(()=>{
    console.log(promise)
},500)