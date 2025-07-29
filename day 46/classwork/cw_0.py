"""1) შექმენით student dictionary, რომელშიც გექნებათ მინიმუმ 4 ელემენტი. შემდეგ გამოიყენეთ მეთოდები ამ dictionary-ზე

.update()
.pop()
ელემენტი შეცვალეთ"""

dictionary =  {
    "name" : "beqa",
    "age" : 16 ,
    "weight" : 57.8
}

dictionary.update({"height" : 1.60})
dictionary.pop("weight")

print(dictionary)