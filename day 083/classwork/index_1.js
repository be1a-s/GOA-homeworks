// 2) შექმენით promise ობიექტი, რომელიც arrow ფუნქციას 2 პარამეტრით: resolve, reject. ამ ფუნქციაში შექმენით ცვლადი internetRequest = true, setTimeout-ის მეშვეობით 3 წამის შემდეგ გამოიძახეთ ფუნქცია რომელიც if-ით შეამოწმებს internetRequest-ის ცვლადს, თუ მართალია ეს ცვლადი მაშინ მოახინდეთ resolve სხვა შემთხვევაში კი reject. promise-ის დასრულებამდე ყოველ ნახევარ წამში შეამომწეთ promise-ის მდოგმარეობა



try {
let promise = new Promise((resolve,rejecte)=>{
    let internetRequest = true;
    setTimeout(()=>{
        if(internetRequest===true){
            resolve("Promise, succes")
        }
        else{
            rejecte("Rejecte, failed")
        }
    }, 3000)
})    
}catch{
    console.log("error promise rejected")
}


setInterval(()=>{
    console.log(promise)
},500)