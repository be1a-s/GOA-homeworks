// 7) შექმენით 2 გვერდი page1.html და page2.html page1-ზე შეიყვანეთ ტექსტი input-ში და შეინახეთ sessionStorage-ში page2-ზე გამოიტანეთ ეს ტექსტი ეკრანზე sessionStorage.getItem-ის გამოყენებით

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("textInput");
  const btn = document.getElementById("saveBtn");

  btn.addEventListener("click", () => {
    sessionStorage.setItem("myText", input.value);
  });
});