
let inp = document.getElementById("input");

let bt = document.getElementById("btn");

let h = document.getElementById("h1");


bt.onclick = function() {
    let i = inp.value;
    h.textContent = "hello " + i
}

