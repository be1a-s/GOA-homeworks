// 2) შექმენით მარტივი img slider პროექტი, რომელშიც გექნებათ 2 ღიალკი: prev, next წინა სურათზე დაბრუნებისა და შემდეგ სურათზე გადასვლისთვის, ღილაკებზე დაჭერით შესაბამისად უნდა გამოიტანოთ მომდევნო და უკანასკნელი სურათი

const images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
]; 

let img = document.querySelector("img");
let btn1 = document.getElementById("b2");
let btn2 = document.getElementById("b1");

btn1.addEventListener("click" ,function (){
    let src = img.src;
    if (src != images[images.length - 1]){
        let ind = images.indexOf(`${src}`);
        img.src = images[ind+1]
    } 
    if (src === images[images.length - 1]){
        img.src = images[0]
    }
})

btn2.addEventListener("click" ,function (){
    let src = img.src;
    if (src != images[0]){
        let ind = images.indexOf(`${src}`);
        img.src = images[ind-1]
    } 
    if (src === images[0]){
        img.src = images[images.length - 1]
    }
})