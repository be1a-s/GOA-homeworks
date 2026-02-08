// 6) sessionStorage-ის გამოყენებით შექმენით counter რომელიც ითვლება მხოლოდ მიმდინარე ტაბში განახლებაზე მნიშვნელობა არ უნდა განულდეს მაგრამ როდესაც დახურავთ ტაბს და თავიდან გახსნით counter ისევ 0-დან უნდა დაიწყოს

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("counter") === null) {
    sessionStorage.setItem("counter", 0);
  }
  let counter = Number(sessionStorage.getItem("counter"));
  const countEl = document.getElementById("count");
  const btn = document.getElementById("btn");
  countEl.textContent = counter;
  btn.addEventListener("click", () => {
    counter++;
    sessionStorage.setItem("counter", counter);
    countEl.textContent = counter;
  });
});