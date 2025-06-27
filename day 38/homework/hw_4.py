"""6) შექმენით tuple სახელად animals, რომელშიც იქნება რამდენიმე ცხოველის სახელი. გამოიყენეთ .count და .index მეთოდები ამ tuple-ზე"""

animals = ("lion","bear","cow","cat","bear","dog","fox")

for i in animals:
    print(animals.count(i),animals.index(i))