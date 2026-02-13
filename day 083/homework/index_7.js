// 9) შექმენით promise simulateLoading რომელიც setTimeout მეშვეობით 1500 მილიწამში დააბრუნებს resolve ტექსტით მონაცემები ჩაიტვირთა შემდეგ გამოიყენეთ then და catch და ახსენით რეალურ ცხოვრებაში როდის გვჭირდება დატვირთვის სიმულაცია

let promise = new Promise((resolve,rejecte)=>{
    let internetRequest = true;
}
)

promise
    .then(()=>{setTimeout(resolve("მონაცემები ჩაიტვირთა"),1500)})
    .catch((error)=>{console.log(error)})
