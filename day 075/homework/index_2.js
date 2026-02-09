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