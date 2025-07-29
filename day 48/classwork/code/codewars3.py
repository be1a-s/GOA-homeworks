
"""https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/python"""

# Renove String Space

def no_space(x):

    text = ""

    for i in x:
        if i != " ":
            text += i
            
    return text