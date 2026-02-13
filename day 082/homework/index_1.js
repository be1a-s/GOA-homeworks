// 2) შექმენით ობიექტი user ველებით name და age და მეორე ობიექტი details ველებით city და country გამოიყენეთ spread ოპერატორი რომ ეს ორი ობიექტი გააერთიანოთ ახალ ობიექტში fullUser და კონსოლში გამოიტანეთ საბოლოო შედეგი კომენტარებით ახსენით როგორ მუშაობს ... ოპერატორი ობიექტების გაერთიანებისას

let user = {
    age : 16,
    name : "beqa"
};

let details = {
    city : "xulo",
    country : "georgia"
}

let fulluser = {...details,...user};
console.log(fulluser)