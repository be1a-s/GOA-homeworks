// 8) შექმენით saveUser ფუნქცია ამ სინტაქსით: const saveUser = () => { ... } რომელიც input-დან აიღებს მომხმარებლის სახელს და შეინახავს localStorage-ში setItem-ით. შექმენით loadUser = () => { ... } რომელიც ამოიღებს შენახულ მნიშვნელობას და DOM-ში გამოიტანს h2-ში. კომენტარებით ახსენით რატომაა arrow function მოსახერხებელი მცირე და ერთხელ გამოსაყენებელ ფუნქციებში

const saveUser = () => {
    let inp = prompt("enter name:")
    localStorage.setItem(inp.value,name1)
 }

const loadUser = () => { 
    let l = localStorage.getItem(name1);
    document.querySelector("body").innerHTML += `
    <h2>${l}</h2>
    `
 }

saveUser()
loadUser()


