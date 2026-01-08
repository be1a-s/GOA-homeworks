// 5) შექმენით ფუნქცია სახელად manualIndexOf რომელსაც გადაეცემა მნიშნელობა და სია, თქვენი დავალებაა ფუნქციიდან დააბრუნოთ ნაპოვნი მნბიშნელობის ინდექსი, თუ გადმოცემული მნიშნელობა სიაში არ მოიძებნა დააბრუნეთ -1

function manualIndexOf(value,arr){
    for (i of arr){
        if (i === value){
            return arr.indexOf(i)
        }
        else{
            return -1
        }
    }
    
}