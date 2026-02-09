// 1) შექმენით სახელისა და პაროლის შესტანი ველი და დამადასტურებელი ღილაკი. როდესაც ღილაკზე მოხდება დაჭერა (გამოიყენეთ onclick ატრიბუტი external javascript-ში) წამოიღეთ მომხარებლის სახელი და და პაროლი, გააერთიანეთ ისინი და გამოიტანეთ კონსოლში, კომენტარებით ახსენით კოდის ყველაა ნაწილს, ასევ დაიცავით საუკეთესო პრაქტიკები

// ვქმნით ცვლადს რათა input name,input password და button-ს  ადვილად მივწდეთ 
let name = document.getElementById("name");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

//  ღილაკზე დაწოლით ვქმნით ცვლადებს სადაც შეინახება სახელი და პაროლი შემდეგ consol-ში გამოგვაქვს ისინი გაერთიანებული სახით
btn.onclick = function(){
    let name2 = name.value;
    let psw2 = psw.value;
    console.log(name2+psw2);
}