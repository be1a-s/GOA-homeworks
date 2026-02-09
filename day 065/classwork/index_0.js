// 1)  შექმენით 3 ობიექტი: მებრძოლის, პროდუქტის და პიროვნების. თითეულში უნდა იყოს მინიუმუმ 3 კუთვნილება და 1 მეთოდი
//, კომენტარებით დაწერეთ რა არის ობიექტი, როგორ იქმება და რაში ვიყენებთ. ასევე ახსენით თქვენი სიტყვებით docment-ის ობიექტი


const fighter ={
    name :"saba",
    age :16,
    weight : 84
};

const prduct ={
    name :"apple",
    price :"2$",
    color : "green"
};

const person ={
    name :"nika",
    age :16,
    weight : 64
};


function value(object,key) {
    console.log(object[key]);
};

value(fighter,"age");

