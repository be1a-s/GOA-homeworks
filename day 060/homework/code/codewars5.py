
"""https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/python"""

# Find the middle element

def gimme(input_array):
    for i in input_array:
        if i is not min(input_array) and i is not max(input_array):
            return input_array.index(i)