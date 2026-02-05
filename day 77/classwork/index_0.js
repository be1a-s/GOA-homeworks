// 1) შექმენით ფორმა, სადაც მომხმარებელი შეიყვანს სრულ სახელს, ელფოსტას და ტელეფონის ნომერს. ფორმის გაგზავნისას ეს ინფორმაცია დაემატოს ქვემოთ არსებულ  ცხრილში ახალ რიგად. გამოიყენეთ JavaScript-ში შექმნილი container და presentational ფუნქციები, რომლებსაც ექნებათ განსხვავებული დანიშნულება, container  ფუნქცია მოამზადებს მონაცემებს და შექმნის tr ელემენტს, ხოლო presentational ფუნქცია დაამატებს მას ცხრილში. კომენტარებით ახსენით თითოეული ფუნქციის როლი


let inpname = document.getElementById("fullname");
let inpemail = document.getElementById("email");
let inpnum = document.getElementById("num");
let btn = document.querySelector("button");
let table = document.querySelector("table");


btn.onclick= function container() {
    let inm = inpname.value ;
    let ine = inpemail.value ;
    let inp = inpnum.value ;

    if (inm === "" || ine === "" || inp === 0 ){
        document.querySelector("form").style.backgroundColor = "red"
        return false
    }
    else if (inm != "" || ine != "" || inp != 0){
        document.querySelector("form").style.backgroundColor = "white"
    }
    function presentational(){
        table.innerHTML += `
            <tr>
                <td>${inm}</td>
                <td>${ine}</td>
                <td>${inp}</td>
            </tr>  
            `   
    }
    presentational()
}