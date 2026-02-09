"""7) შექმენით ლექსიკონი animal, შექმენით მისი ასლი .copy() მეთოდით, შემდეგ კი გამოიყენეთ .clear() ორივეზე (დასაწყისში და ბოლოს დაბეჭდეთ ორივე ლექსიკონი, კომენტარით)"""

animal = {
    1 : "lion",
    2 : "bear",
    3 : "elephant"
}

animal2 = animal.copy()

print(f"animals dictionary {animal,animal2}")

animal2.clear()
animal.clear()

print(f"animals dictionary {animal,animal2}")