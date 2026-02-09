// 8) შექმენით ორი ფორმა რეგისტრაციის და შესვლის რეგისტრაციის ფორმაზე submit-ზე username და password ჩაიწეროს localStorage-ში login-ის ფორმაზე submit-ზე შეამოწმეთ ემთხვევა თუ არა localStorage-ში შენახულ მნიშვნელობებს თუ ემთხვევა დაიმალოს რეგისტრაციის ფორმა და გამოჩნდეს ტექსტი Welcome username ასევე გამოჩნდეს Logout ღილაკი Logout-ზე დაჭერისას წაიშალოს მომხმარებელი localStorage-იდან და ფორმა ისევ გამოჩნდეს

let regname = document.getElementById("name");
let regpas = document.getElementById("pas");
let sub1 = document.getElementById("submit1");
let body = document.querySelector("body");

let acc = JSON.parse(localStorage.getItem("acc")) || [];

let bodylog = `
<div id="registration" style="display:flex;flex-direction:column;gap:10px;height:90vh;width:100%;align-items:center;justify-content:center;">
  <input type="text" id="name">
  <input type="password" id="pas">
  <button id="submit1">submit</button>
</div>
`;

let body3 = `
<button id="logout">log out</button>
<div style="display:flex;flex-direction:column;gap:10px;height:90vh;width:100%;align-items:center;justify-content:center;">
  <h1>welcome</h1>
</div>
`;

sub1.addEventListener("click", function () {
  let account = [regname.value, regpas.value];
  acc.push(account);
  localStorage.setItem("acc", JSON.stringify(acc));

  body.innerHTML = `
  <div id="login" style="display:flex;flex-direction:column;gap:10px;height:90vh;width:100%;align-items:center;justify-content:center;">
    <input type="text" id="loginname">
    <input type="password" id="loginpas">
    <button id="submit2">submit</button>
  </div>
  `;

  let sub2 = document.getElementById("submit2");
  let logname = document.getElementById("loginname");
  let logpas = document.getElementById("loginpas");

  sub2.addEventListener("click", function () {
    let account1 = JSON.parse(localStorage.getItem("acc")) || [];

    for (let i = 0; i < account1.length; i++) {
      if (account1[i][0] === logname.value && account1[i][1] === logpas.value) {
        body.innerHTML = body3;

        let logout = document.getElementById("logout");
        logout.addEventListener("click", function () {
          body.innerHTML = bodylog;
          location.reload();
        });
      }
    }
  });
});

