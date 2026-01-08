const productsContainer = document.getElementById("productsContainer");
const productCart = document.getElementById("productCart");

const products = [
    {name: "product1", price: 100, desc: "ery tr4yrtyrtytry rtytryr"},
    {name: "product2", price: 200, desc: " eryert yrty rtyrrtyrt"},
    {name: "product3", price: 300, desc: " eryerttyeryetyry r"},
    {name: "product4", price: 400, desc: "eryeryert yertytryrt"},
]

for (let i = 0; i < products.length; i++){
    let currentProduct=products[i];

    let productDiv = document.createElement("div");

    let productTitle = document.createElement("h2");

    productTitle.textContent = currentProduct.name;

    let productDesc = document.createElement("p");
    productDesc.textContent = currentProduct.desc;

    let price = document.createElement("p");
    productDesc.textContent = `price ${currentProduct.price}`;

    let addBtn = document.createElement("button");
    addBtn.textContent = "add to cart";

    addBtn.onclick = function () {
        const newItem = document.createElement("li");
        newItem.textContent = `Product Name: ${currentProduct.name}, price: ${currentProduct.price}`;
        productCart.appendChild(newItem);
    }

    let productImg = document.createElement("img");
    productImg.style.width = "200px";
    productImg.style.height = "200px";

    productDiv.appendChild(productTitle);
    productDiv.appendChild(productDesc);
    productDiv.appendChild(price);
    productDiv.appendChild(productImg);
    productDiv.appendChild(addBtn);

    productDiv.style.border = "1px solid grey";

    productsContainer.appendChild(productDiv);
}