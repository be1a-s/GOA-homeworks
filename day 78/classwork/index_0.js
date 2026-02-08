// 1) Event propagation ახსენით თქვენი სიტყვებით, დაწერეთ რას ნიშნავს კომენტარებით, მოიყვანეთ bubbling-ის და capturing-ის მაგალითი

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