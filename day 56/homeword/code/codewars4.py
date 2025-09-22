
"""https://www.codewars.com/kata/56b1f01c247c01db92000076/train/python"""

# Double Char

def double_char(s):
    text = ""
    for i in s:
        text += i+i
    return text