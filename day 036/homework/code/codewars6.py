"""https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/python"""

# Indexed capitalization

def capitalize(s, ind):
    text = ""
    for i in range(len(s)):
        if i in ind:
            text += s[i].upper()
        else:
            text += s[i]
    return text