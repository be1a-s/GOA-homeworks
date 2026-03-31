
let accounts = `
    [
    {
        "name":"beqa",
        "balance":400
    },
    {
        "name":"saba",
        "balance":200
    }
]`

console.log(JSON.stringify(accounts));
console.log(JSON.parse(JSON.stringify(accounts)))