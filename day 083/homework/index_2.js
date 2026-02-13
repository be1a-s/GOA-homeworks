// 4) შექმენით productPrices Map პროდუქტების ფასებით გამოიყენეთ for of ლუპი რომ დაბეჭდოთ თითო key და value შემდეგ map.set ით გაზარდეთ ერთ-ერთი პროდუქტის ფასი 20 პროცენტით


let productPrices = new Map([
    ["orange",20],
    ["apple",25],
    ["banana",10],
    ["greap",30],
])

for (let i of productPrices){
    console.log(i)
}

productPrices.set("orange",22)
