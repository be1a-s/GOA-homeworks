"""8) შექმენით ფუნქცია 'multiply', რომელიც იღებს რიცხვებს 'args'-ით და აბრუნებს მათ ნამრაველს"""

def multiply(*args):
    num = 1
    for i in args:
        num *= i

    return num

print(multiply(1,5,6,3))
