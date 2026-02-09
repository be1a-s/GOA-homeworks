"""5) დაწერე ფუნქცია, რომელიც იღებს ერთ რიცხვს და აბრუნებს "Even" თუ ლუწია, ან "Odd" თუ კენტია"""

def numbers(num):
    
    number = " "
    if num % 2== 0:
        number = "Even"
    else:
        number = "Odd"
    return number

num1 = numbers(6)

print(num1)