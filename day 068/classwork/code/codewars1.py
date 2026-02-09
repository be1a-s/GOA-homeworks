
"""https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python"""

# Convert string to camel case

def to_camel_case(text):
    text1 = text.replace("-","_").split("_")
    return text1[0] + "".join(i.capitalize() for i in text1[1:])