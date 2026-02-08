// 2) შექმენით getProducts ფუნქცია, რომელიც წამოათრევს ინფორმაციას მოცემული api-იდან, თქვენ მოგეცემათ სია 20 პროდუქტის ობიექტით, თქვენი დავალებაა თითოეული პროდუქტის სათაური, კატეგორია და სურათი დაარენდეროთ ცალ-ცალკე დივებად products container-ში (div), თქვენი სიტყვებით დაწერეთ async & await-ზე

// https://fakestoreapi.com/products


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