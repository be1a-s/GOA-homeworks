// 5) შექმენით ფუნქცია calcSum(first, ...numbers) რომელიც დაბეჭდავს პირველ რიცხვს და დანარჩენი რიცხვების ჯამს

function calcSum(first, ...numbers){
    console.log(first)
    let nums = 0;
    for (let i of numbers){
        nums += i
    }
    console.log(nums)
}

calcSum(1,2,3,4,5,6,7,8)
