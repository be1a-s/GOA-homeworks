// 2) შექმენით ობიექტი laptop, რომელსაც ექნება ბრენდი, RAM და price. დაამატეთ method turnOn(), რომელიც console.log()-ში გამოიტანს "Laptop is on". შემდეგ HTML ღილაკზე <button id="laptopBtn">Turn On Laptop</button> დაჭერისას გამოიძახეთ method. კომენტარებში ახსენით property, method და როგორ მოქმედებს ობიექტი HTML ელემენტზე

const laptop = {
    ram : 4,
    price : 1500
};

function turnOn() {
    console.log("laptop is on")
};



document.getElementById("btn").onclick = (
      turnOn()
)