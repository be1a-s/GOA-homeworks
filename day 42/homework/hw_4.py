"""6) შექმენით ლექსიკონი person და გამოიყენეთ .items() მეთოდი, რათა დაბეჭდოთ ყველა key და value წყვილად. გამოიყენეთ loop და კომენტარი დაუმატეთ შედეგს"""

person =  {
    "name" : "beqa",
    "surname" : "abuladze"
}
person_2 = person.items()
for i in person_2:
    print(f"person {i}")



