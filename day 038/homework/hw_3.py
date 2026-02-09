"""5) დაწერეთ ფუნქცია, რომელიც მიიღებს სიას და დაბეჭდავს უნიკალურ ელემენტებს და მათ რაოდენობას სიაში, მაგ: apple - 2, banana - 3... გამოიყენეთ .count მეთოდი"""

def fruits(arr):
    list1 = []
    for i in arr:
        if arr.count(i) >1 and i not in list1:
            list1.append(i)
    for i in list1:
        print(f"{i}-{arr.count(i)}")              
            


list2 = ["apple", "banana", "watermelon","strawbery","cheri","bluberi", "watermelon", "banana", "banana","apple","apple","apple"]
fruits(list2)