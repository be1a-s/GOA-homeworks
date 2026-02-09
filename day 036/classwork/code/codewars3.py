"""https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/python"""

# Neutralisation

def neutralise(s1, s2):
    text = ""
    for i in range(len(s1)):
        if s1[i] == s2 [i]:
            text += s1[i]
        elif s1[i] != s2 [i]:
            text += "0"
    return text