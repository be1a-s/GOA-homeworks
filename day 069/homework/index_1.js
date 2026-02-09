// 3) დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ calculateAverage ამ ფუნქციაში გამოითვლით იმ რიცხვების საშუალოს რომელიც მოთავსებულია სიაში, მიღებული საშუალო დააბრუნეთ ფუნქციიდან

function calculateAverage(arr) {
    let l = arr.length();
    let c = 0;
    
    for (let i = 0; i < l; i = i + 1){
        c = c + arr[i]
    }
    let b = c / l;
    return b
}