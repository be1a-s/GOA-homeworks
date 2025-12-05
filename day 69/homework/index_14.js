// 16) შექმენით ფუნქცია რომელიც მიიღებს მასივს და დაითვლის რამდენი ლუწი რიცხვია მასში

function howManyEven(arr){
    let c = 0;
    for (i of arr){
        if (i % 2 ===0){
            c = c+1
        }
    }
    return c
}