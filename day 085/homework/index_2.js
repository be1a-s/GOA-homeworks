// 4) შექმენით toDo აპლიკაცია სადაც input-ით შეყვანილი task დაემატება DOM-ში list-ის სახით თითო task-ს ექნება delete ღილაკი გამოიყენეთ JSON.stringify მონაცემების localStorage-ში შესანახად და JSON.parse რომ რეფრეშის შემდეგ tasks გამოჩნდეს filter გამოიყენეთ წაშლილი task-ების ამოსაღებად
// Requirements


// 1. HTML input და add ღილაკი
// 2. JS ფუნქცია addTask რომელიც დაამატებს ახალ task DOM-ში
// 3. delete ღილაკი თითო task-ის წასაშლელად
// 4. task-ების შენახვა localStorage-ში JSON.stringify გამოყენებით
// 5. localStorage-ის ამოღება JSON.parse და არსებული task-ების რენდერი
// 6. filter რომ წაშლილი task-ები არ დარჩეს მასივში

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click" ,function(){
    let newli1 = document.createElement("li");
    let butt = document.createElement("button");
    newli1.innerHTML = `${inp.value}`;
    butt.innerHTML = `delete`
    butt.addEventListener("click",function(){
        ol.removeChild(newli1)
    })
    newli1.appendChild(butt)
    ol.appendChild(newli1)
})