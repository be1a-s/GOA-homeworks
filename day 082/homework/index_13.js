// შექმენით products მასივი name და price ველებით გაფილტრეთ მხოლოდ იაფი პროდუქტები filter ით

let products = [{name1:"potato",price:4},{name1:"tomato",price:6},{name1:"sandora",price:12},{name1:"cocacola",price:5},{name1:"pringles",price:8}];

let cheap = products.filter((product)=>{
    return product.price < 6
})

console.log(cheap)