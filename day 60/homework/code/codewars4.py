
"""https://www.codewars.com/kata/52f3149496de55aded000410/train/python"""

# Summing a number's digits

def sum_digits(number):
    list1 = [int(i) for i in str(number) if i != "-"]
    return sum(list1)