// 5) შექმენით input ველი და ღილაკი “ძებნა”. გვერდზე გქონდეთ წინასწარ ჩამონათვალი (ul ელემენტში რამდენიმე li ტექსტით). როდესაც მომხმარებელი შეიყვანს სიტყვას და დააჭერს ღილაკს, მხოლოდ ის ელემენტები უნდა დარჩეს ხილული, რომლებიც შეიცავენ შეყვანილ ტექსტს, დანარჩენი უნდა დაიმალოს (display: none). გამოიყენეთ for ციკლი თითოეული li ელემენტის შესამოწმებლად და კომენტარებით ახსენით როგორ ხდება ტექსტის შედარება და ელემენტის დამალვა ან ჩვენება

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis=document.querySelector("ul").childNodes;



btn.addEventListener("click",function(){
    let v = inp.value ;
    let list1 = []
    for (i of lis){
        if (i.innerHTML === v){
            list1.push(i.innerHTML)
        }
    }
    ul.innerHTML =`
        ${list1[0]}
    `
})
