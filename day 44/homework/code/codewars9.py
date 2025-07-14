
"""https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python"""

# Jaden Casing Strings

def to_jaden_case(string):
    strings = string.split()
    capitalize = []
    for i in strings:
        capitalize.append(i.capitalize())
    return " ".join(capitalize)