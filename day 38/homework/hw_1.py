"""3) შექმენით ფუნქცია manual_count, რომელიც მიიღებს სიას და ელემენტს და დააბრუნებს ელემენტის რაოდენობას სიაში. გამოიყენეთ მხოლოდ loop და if, .count მეთოდის გარეშე"""

def manual_count (arr):
    num = 0
    for i in arr:
        num += 1
    return num

list1 = ["1","2","3"]
print(manual_count(list1))