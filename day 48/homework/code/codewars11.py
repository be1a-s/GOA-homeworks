
"""https://www.codewars.com/kata/5949481f86420f59480000e7/train/python"""

# Odd or Even?

def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return "even"
    else:
        return "odd"