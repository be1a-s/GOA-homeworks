
"""https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python"""

# Remove exclamation marks

def remove_exclamation_marks(s):
    text = ""
    for i in s:
        if i != "!":
            text += i
    return text

