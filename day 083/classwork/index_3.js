// 3) მოცემული api-დან fetch-ის, promise, try, catch მეშვეობით წამოიღეთ ინფორმაცია და გამოიტანეთ კონსოლში

// https:jsonplaceholder.typicode.com/todos
let btn = document.querySelector("button");
let div = document.querySelector("div");


btn.addEventListener("click" ,()=>{
    let promise = fetch("https:jsonplaceholder.typicode.com/todos");
    promise
        .then((response)=>response.json())
        .then(renderinfo)
        .catch((error)=>console.log(error))
})

function renderinfo(userinfo){
    for (let i in userinfo){
      console.log(userinfo[i])
    } 
}