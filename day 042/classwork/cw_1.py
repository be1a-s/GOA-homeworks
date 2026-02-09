"""2) კომენტარებით რა არის dictionary, შემდეგ შექმენით 1 dictionary სახელად person რომელშიც გასაღებები იქნება: name, hobby, height, weight. გამოიყენეთ მეთოდები:

clear()
copy()
get()
items()
keys()
values()
pop()
popitem()
update"""

#dictionary - ს გააჩნია ორი ელემნტის სახე kay/value 

dictionary = {
    "name" : "beqa",
    "age" : 16,
    "height" : 1.60,
    "hobby" : "football"
}

copy_dictionary = dictionary.copy()

print(dictionary.get("height"))

print(dictionary.items())

print(dictionary.keys())

print(dictionary.values())

dictionary.pop("name")

dictionary.popitem()

dictionary.update({"weight" : 57.800})

dictionary.clear()