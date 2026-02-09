// 6) შექმენით ობიექტი tablet, რომელსაც ექნება brand, model და color. დაამატეთ method playMusic(), რომელიც console.log()-ში დაწერს "Playing music...". HTML ღილაკზე <button id="musicBtn">Play Music</button> დაჭერისას გამოიძახეთ playMusic()

const tablet = {
    brand : "lenovo", 
    model : "tickpad",
    color : "black"
}


let  b = document.getElementById ("musicBtn");

b.onclick = function playMusic() {
    console.log("playing music ...")
}