"""2) შექმენით ფუნქცია, რომელიც მიიღებს ნებისმიერ რაოდენობის რიცხვებს 'args'-ით და დააბრუნებს მათ ჯამს"""


def sum_of_numbers(*args):
    sum = 0
    for i in args:
        sum += i
    return sum

print(sum_of_numbers(10,20,40))