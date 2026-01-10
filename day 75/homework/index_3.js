// 5) შექმენით ანიმაცია, სადაც პატარა ყუთი იმოძრავებს დიდ ყუთში საათის ისრის მიმართულებით. თავდაპირველად უნდა დაიწყოს მარჯვნივ წასვლა, შემდეგ ქვემოთ ჩასვლა, მერე მარცხნივ გადაადგილება და ბოლოს ზემოთ ასვლა. როდესაც ზემოთ დაბრუნდება, მოძრაობა თავიდან უნდა დაიწყოს და ეს პროცესი უსასრულოდ გრძელდებოდეს. გამოიყენეთ setInterval ფუნქცია ანიმაციის გასაშვებად და კომენტარებით ახსენით როგორ მუშაობს პოზიციის ცვლილება და მიმართულების შეცვლა

const childDiv = document.getElementById("child")

let positionX = 0;
let positiony = 0;
let direction = "right";

function animate(){
    if(direction ==="right"){
        positionX++;
        if(positionX >= 150) {
            direction = "bottom"
        }
    }
    if(direction ==="bottom"){
        positiony++;
        if(positiony >= 150) {
            direction = "left"
        }
    }
    if(direction ==="left"){
        positionX--;
        if(positionX <= 0) {
            direction = "top"
        }
    }
    if(direction ==="top"){
        positiony--;
        if(positiony <= 0) {
            direction = "right"
        }
    }
    childDiv.style.left = `${positionX}px`
    childDiv.style.top = `${positiony}px`
}
setInterval(animate, 5000)