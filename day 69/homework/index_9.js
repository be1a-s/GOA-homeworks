// 11) შექმენით ფუნქცია სახელად isPrime, რომელიც ამოწმებს გადაცემული რიცხვი მარტივია თუ არა და აბრუნებს true ან false

function isPrime(a) {
    if (a === 2){
        return true
    }
    else if (a %2 !== 0){
        return true
    }
    else {
        return false
    }
}