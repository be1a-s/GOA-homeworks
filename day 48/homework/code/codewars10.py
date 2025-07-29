
"""https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python"""

# Ones and Zeros

def binary_array_to_number(arr):
    binary_str = "".join(str(digit)for digit in arr)
    return int(binary_str, 2)