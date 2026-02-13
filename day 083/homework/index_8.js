//  გააკეთეთ fetch მომხმარებლების მისამართზე https://jsonplaceholder.typicode.com/users და then ბლოკში forEach გამოყენებით დაბეჭდეთ name და email კომენტარებში ახსენით რატომ არის fetch ასინქრონული და რატომ აბრუნებს ყოველთვის promise


fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log("Name:", user.name);
      console.log("Email:", user.email);
    });
  })
  .catch(error => console.log("Error:", error));