
"""https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python"""

# Mumbling

def accume(st):
    elements = []
    for index,char in enumerate(st):
        string = (index + 1) * char
        elements.append(string.capitalized())
    return "-".join(elements)