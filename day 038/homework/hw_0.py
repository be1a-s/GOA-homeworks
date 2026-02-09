"""2) შექმენით ფუნქცია manual_index, რომელიც მიიღებს სიას და ელემენტს და დააბრუნებს ელემენტის ინდექსს სიაში. გამოიყენეთ მხოლოდ loop და if, .index მეთოდის გარეშე"""

def manual_index(arr,element):
    num = -1
    for i in arr:
        num +=1
        if i == element:
            break
    return num

list1 = ["1","2","3"]
print(manual_index(list1,"1"))