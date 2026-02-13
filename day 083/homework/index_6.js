// 8) გააკეთეთ fetch მოთხოვნა მისამართზე https://jsonplaceholder.typicode.com/posts და then ბლოკში გამოიტანეთ მხოლოდ პირველ 5 პოსტის title კომენტარებში ახსენით რა არის response.json და რატომ უნდა გამოვიყენოთ ის


let promise = fetch("https://jsonplaceholder.typicode.com/posts");
promise
    .then((response)=>response.json())
    .then(renderinfo)
    .catch((error)=>console.log(error))


function renderinfo(userinfo){
    for (let i=0;i <5 ;i++){
      console.log(userinfo[i])
    } 
}