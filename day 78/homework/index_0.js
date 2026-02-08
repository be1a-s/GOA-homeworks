// 2) ახსენით addEventListener-ის მესამე პარამეტრი თქვენი სიტყვებით დაწერეთ რა ხდება capturing რეჟიმში და რა ხდება bubbling რეჟიმში შემდეგ შექმენით 3 ჩადგმული ელემენტი div → section → button და აჩვენეთ ორივე რეჟიმის მუშაობა

const myDiv = document.querySelector("div")
const btn = document.querySelector('button')
function clickHandler(e){
    console.log(e.currentTarget)
}

// ad - dEventListener-ის მესამე პარამეტრი განსაზღვრავს თუ საიდან დაიწყება მოვლნების დარეგისტრირება
// თუ მესამე პარამეტრი არ გვაქვს default-ად იგულისხმება false
// false მოვლენის დარეგისტრირება იწყება შიდა ობიექტებიდან (bubbling)
// true - მოველნის დარეგისტრირება ხდება მშობელი ობიექტებიდან (capturing)

btn.addEventListener("click", clickHandler)

myDiv.addEventListener("click", clickHandler)