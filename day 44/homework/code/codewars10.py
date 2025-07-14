
"""https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/python"""

# Sum of two lowest positive integers

def sum_two_smallest_numbers(numbers):
    list1 = []
    list1.append(min(numbers))
    numbers.remove(min(numbers))
    list1.append(min(numbers))
    return sum(list1)