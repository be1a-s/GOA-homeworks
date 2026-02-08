// 4) შექმენით getProducts ფუნქცია, რომელიც async ტიპის იქნება. await-ის გამოყენებით წამოიღეთ პროდუქტის სია https://fakestoreapi.com/products API-დან. მიღებული მასივიდან თითოეული პროდუქტი გამოიტანეთ DOM-ში ცალკე დივად: სათაური, კატეგორია და სურათი. კომენტარებით ახსენით თქვენი სიტყვებით async და await რას აკეთებს

let div = document.getElementById("product");


function render(arr) {
    
    for(let product of arr){
        console.log(div);
        div.innerHTML +=`<div>
            <h3>${product.title}</h3>
            <b>category: ${product.category}<b>
            <p>${product.description}<p>
            <img src="${product.image}">
            <button>${product.price}<button>
        </div>
        `
    }
}

async function fetchdata() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    render(data)
}

fetchdata()